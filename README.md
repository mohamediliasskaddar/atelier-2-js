Atelier 2 : JavaScript et POO
L'objectif de cet atelier est de se familiariser avec la programmation orientée objet (POO) en JavaScript.

Exercice 1 : Gestion des voitures
But : Créer une fonction constructeur pour une voiture avec les attributs model, marque, année, type et carburant.
Liste des voitures : On crée une collection de voitures.
Héritage : On met en place l’héritage pour créer deux types spécifiques :
Hyundai : Avec des attributs série et hybride et une méthode alarmer().
Ford : Avec un attribut options (un tableau).
Tri : Les voitures sont triées par année (ordre croissant) et affichées.
Exercice 2 : Objets Étudiant et Professeur
But : Créer deux objets natifs :
Étudiant avec nom, prénom, age et cne.
Professeur avec nom, age et cin.
Méthodes :
Ajouter la méthode étudier() à l’objet Étudiant.
Ajouter la méthode enseigner() à l’objet Professeur.
Tri : Les étudiants sont triés par ordre alphabétique (nom et prénom).
Exercice 3 : Vecteur2D, Rectangle, Carré, Point et Segment
Vecteur2D :
Création d’une classe avec des coordonnées par défaut (x = 0, y = 0).
Possibilité d’instancier avec ou sans paramètres.
Ajout d’une méthode d’affichage.
Surcharge de l’addition pour additionner deux vecteurs.
Rectangle et Carré :
Création d’une classe Rectangle avec longueur, largeur, et un attribut nom par défaut ("rectangle").
Méthode d’affichage et méthode pour calculer la surface.
Classe Carré qui hérite de Rectangle et qui change l’attribut nom à "carré".
Point et Segment :
Création d’une classe Point avec des coordonnées par défaut.
Création d’une classe Segment composée de deux instances de Point (origine et extrémité).
Bonus : Gestion des données avec localStorage (Exemple de Blog)
Conversion JSON :
La méthode toJSON() transforme un objet (User ou Post) en un format simple pour être stocké (en chaîne JSON).
La méthode fromJSON() permet de recréer l’objet à partir du format JSON.
Stockage et récupération :
Les données (utilisateurs, posts, état de connexion) sont enregistrées dans le localStorage.
À chaque changement, les données sont mises à jour et sauvegardées pour être récupérées lors du prochain chargement.
