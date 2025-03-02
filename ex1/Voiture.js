/*Exercice 1 :
1. Ecrire une fonction constructeur voiture avec les attributs « model , marque, année, type,
carburant » .
2. créer une liste des voitures.
3. implémenter le mécanisme d’héritage entre la classes voitures et deux autre classes Hyndai
( attributs : série(string) , hybride (booléen) / méthodes : alarmer() )et Ford ( options (tableau )).
4. Trier puis afficher les voiture selon un ordre croissant des année.
*/
//constructor 
function voiture(model , marque, annee, type, carburant){
    this.model= model;
    this.marque=marque;
    this.annee= annee;
    this.type= type;
    this.carburant= carburant;
}
//liste des voiture 
var listeVoiture = [
    new voiture( "208", "peugeot", 2022, "citadine", "disel"),
    new voiture( "209", "nissin", 2021, "citadine", "essence"),
    new voiture( "209", "peugeot", 2012, "citadine", "esseence"),
    new voiture( "202", "dacia", 2020, "citadine", "disle"),
];
//l'heritage 
//hyndai
function hyndai(model , marque, annee, type, carburant, serie, hybride){
    voiture.call(this,model , marque, annee, type, carburant);
    this.serie=serie;
    this.hybride= hybride;
    this.alarmer();
}
//Ford
function Ford(model , marque, annee, type, carburant,options){
    voiture.call(this,model , marque, annee, type, carburant);

    this.options=options;
}
// le tri de la liste
//fct comparatif 
/* missunderstainding  
function compare(cmp1, cmp2){
    let cp1= cmp1.getTime();
    let cp2= cmp2.getTime();
    return cp1-cp2;
}
function compare(cmp1, cmp2){
    
    return cmp1.annee - cmp2.annee;
}*/

console.log(listeVoiture);
console.log("_____________________________________");

listeVoiture.sort(function(a, b) {
    return a.annee - b.annee; 
});

console.log(listeVoiture);
