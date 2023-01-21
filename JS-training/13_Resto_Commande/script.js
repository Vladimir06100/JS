"use strict";
// Création des variables / constantes
const plat = 20;
const bna = 5;
const ba = 8;

let age = prompt("Quel âge avez-vous ?");
age = parseInt(age); // Il faut transformer l'âge en nombre si on veut faire des calculs (Pas toujours fais automatiquement)
let credit = prompt("Combien d'argent disposez-vous ?");
credit = parseInt(credit); // Il faut transformer le crédit en nombre si on veut pouvoir faire des calculs (Pas toujours automatique)
let choix = ""; // Choix vide ici pour pas que le choie soit undefined dans la boucle

// Fonction qui affiche le menu en fonction du crédit disponible et de l'âge pour l'alcool
function menu1(credit) {
	let result = ""; // On part d'un result vide

	result = result + "Veuillez choisir votre commande \n "; // Peu importe le crédit, on aura toujours cette phrase dans result

	if (credit >= 20) {
		result = result + "1 - Plat (20€)\n"; // On ajoute à result le plat
	}
	if (credit >= 5) {
		result = result + "2 - Boisson non alcoolisée (5€)\n"; // On ajoute à result la BNA
	}
	if (credit >= 8 && age >= 18) {
		result = result + "3 - Boisson alcoolisée (8€)\n"; // On rajoute à result la BA
	}

	result =
		result + "4 - Sortir \n --------------- \n Votre crédit est de: " + credit; // Peu importe le crédit, on aura toujours cette phrase dans result

	return result;
}

// Fonction pour acheter le product avec la soustraction du crédit et qui retourne le nouveau crédit
function buyProduct(price, credit) {
	// Vérification du crédit par rapport au prix
	if (credit >= price) {
		credit = credit - price; // Soustraction du prix dans le crédit
		alert("Bon appétit il vous reste: " + credit); // Affichage de confirmation de commande
		return credit; // On est renvoi le nouveau crédit
	} else {
		error(); // Affichage du message d'erreur
	}
}

// Fonction qui affiche un message d'erreur
function error() {
	alert("Commande refusée fond insuffisant.");
}

// POINT VIRGULE A CHAQUE FIN D'INSTRUCTION EN JS;

// TANT QUE le crédit est supérieur ou égal à la BNA (5) et que le choix est différent de
while (credit >= bna && choix !== 4) {
	// CREATION DES CONDITIONS

	let menu = menu1(credit); // Appel de la fonction menu avec pour paramètre crédit

	choix = prompt(menu); // Affichage du menu en fonction du return de la fonction "menu"

	if (choix === 1) {
		// credit prend la valeur du return de la fonction buyProduct
		credit = buyProduct(plat);
	} else if (choix === 2) {
		// credit prend la valeur du return de la fonction buyProduct
		credit = buyProduct(bna);
	} else if (choix === 3) {
		// credit prend la valeur du return de la fonction buyProduct
		credit = buyProduct(ba);
	} else {
		// Si le choix est == à 4 ont envoi un message d'au revoir
		if (choix === 4) {
			alert("A bientôt");
		} else {
			alert("Je n'ai pas compris votre choix réessayer"); // Choix incompris par l'algorithme
		}
	}
}
