/* Exercice 2 :
1. Creer deux objet native Etudiant ( nom : string , prenom : string , age : number , cne : string ) et
Professeur ( nom : string , age : number , cin : string , )
2. Ajouter une méthode étudier() a l’objet Etudiant, puis ajouter une méthode enseigner() a l’objet
Etudiant Professeur.
3. Trier les étudiants selon l’ordre alphabétique « nom et prénom ».
*/

//Qst : 1;
function Etudiant(nom, prenom, age, cne) {
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
    this.cne = cne;
}

function Professeur(nom, age, cin) {
    this.nom = nom;
    this.age = age;
    this.cin = cin;
}
//objet native Etudiant
let etudiants = [
    new Etudiant("Zorro", "Alan", 20, "U123"),
    new Etudiant("Martin", "Bob", 22, "U456")
];

//Qst: 2;
//meth etudier
Etudiant.prototype.etudier = function() {
    console.log("Je suis un étudiant");
};
//meth ensigner 
Professeur.prototype.enseigner = function() {
    console.log("Je suis un professeur");
};

//Qst: 3;
//tri des etuds

console.log(etudiants);
console.log("____________________");
//fct pour tri 
etudiants.sort(function(a, b) {
    let compareNom = a.nom.localeCompare(b.nom);
    if (compareNom !== 0) return compareNom;
  
    return a.prenom.localeCompare(b.prenom);
});
console.log(etudiants);
