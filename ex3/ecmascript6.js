/* Exercice 3 :
En utilisant le javascript avec le standard EcmaScript 6 :
Définir une classe Vecteur2D avec un constructeur fournissant les coordonnées par défaut d’un
vecteur du plan (par exemple : x = 0 et y = 0).

Dans le programme principal, instanciez un Vecteur2D sans paramètre, un Vecteur2D avec ses deux
paramètres, et affichez-les.

Enrichissez la classe Vecteur2D précédente en lui ajoutant une méthode d’affichage et une méthode
de surcharge d’addition de deux vecteurs du plan.

Dans le programme principal, instanciez deux Vecteur2D, affichez-les et affichez leur somme.

Définir une classe Rectangle avec un constructeur donnant des valeurs (longueur et largeur) par
défaut et un attribut nom = "rectangle", une méthode d’affichage et une méthode surface renvoyant
la surface d’une instance.

Définir une classe Carre héritant de Rectangle et qui surcharge l’attribut d’instance : nom = "carré".
Dans le programme principal, instanciez un Rectangle et un Carre et affichez-les.

Définir une classe Point avec un constructeur fournissant les coordonnées par défaut d’un point du
plan (par exemple : x = 0.0 et y = 0.0).

Définir une classe Segment dont le constructeur possède quatre paramètres : deux pour l’origine et
deux pour l’extrémité. Ce constructeur définit deux attributs : orig et extrem, instances de la classe
Point. De cette manière, vous concevez une classe composite : la classe Segment est composée de
deux instances de la classe Point. */

class Vecteur2D{
    constructor(x=0, y=0) {
        this.x=x;
        this.y=y;
    };
    afficher(){
        console.log("les cords sont:", this.x, "et ", this.y);
    };
    add(vect){
        const resultVect= new Vecteur2D;
        resultVect.x = this.x+vect.x;
        resultVect.y= this.y+vect.y;
        return resultVect;
    }
}

//intances 
var  vect1 = new Vecteur2D();
var vect2 = new Vecteur2D(1,2);
//afichage via console
console.log("_________________ via console______________ ");

console.log(vect1);
console.log(vect2);
//affichage
console.log("___________________ via afficher___________");
vect1.afficher();
vect2.afficher();

//instaciation de deux vect et les affichez

var v1 = new Vecteur2D(2,2);
var v2 = new Vecteur2D(3,3);
var v12 = new Vecteur2D;

console.log("_____________ via afficher______________ ");

v1.afficher();
v2.afficher();
v12 = v1.add(v2);
v12.afficher();

/*Définir une classe Rectangle avec un constructeur donnant des valeurs (longueur et largeur) par
défaut et un attribut nom = "rectangle", une méthode d’affichage et une méthode surface renvoyant
la surface d’une instance.*/

class Rectangle {
    constructor(long, larg){
        this.larg=larg;
        this.long= long;
    }
    static nom = "rectangle";
    //meth afficahge 
    affichage(){
        console.log("je suis un rectangle de dimensions", this.larg, "et ", this.long);
    }
    //meth surface 
    surface(larg, long){
        return larg*long;
    }
}
    /*Définir une classe Carre héritant de Rectangle et qui surcharge l’attribut d’instance : nom = "carré".
    Dans le programme principal, instanciez un Rectangle et un Carre et affichez-les. */
    class Carre extends Rectangle {
       
       constructor(long ,larg){
        super(long, long)
       }

        nom="carre";
        affichage(){
            console.log("je suis un carre de cote", this.long);

        }
    }
    //instance 
    const  Carre1= new Carre(1);
    const rec1= new Rectangle(1,2);
    //affichage
    Carre1.affichage();
    rec1.affichage();


/*Définir une classe Point avec un constructeur fournissant les coordonnées par défaut d’un point du
plan (par exemple : x = 0.0 et y = 0.0).

Définir une classe Segment dont le constructeur possède quatre paramètres : deux pour l’origine et
deux pour l’extrémité. Ce constructeur définit deux attributs : orig et extrem, instances de la classe
Point. De cette manière, vous concevez une classe composite : la classe Segment est composée de
deux instances de la classe Point. */
class Point{
    constructor(x=0.0 , y = 0.0){
        this.x=x;
        this.y=y;
    }
}
class Segment{
    constructor(origX, origY, extX, extY){
     this.orig = new Point(origX, origY); 
     this.ext = new Point(extX, extY); 
    }
}
