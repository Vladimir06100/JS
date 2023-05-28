"use strict";
// RECUPERATION DES ELEMENTS
let nameInput = document.querySelector(".nameInput");
let firstNameInput = document.querySelector(".firstNameInput");
let mailInput = document.querySelector(".mailInput");
let phoneInput = document.querySelector(".phoneInput");
let addInput = document.querySelector(".addInput");
let affichage = document.querySelector(".affichage");
let affichageFiltre = document.querySelector(".affichageFiltre");
let inputFilter = document.querySelector(".filter");

// Création d'un tableau qui va stocker tous les contacts
let tableau = [];
let tableau2 = [];

function ajoutContact() {
	// On met un event listener sur notre bouton ajouter qui va :
	addInput.addEventListener("click", function (e) {
		// Empêcher la page de se recharger
		e.preventDefault();
		// Si le formulaire n'est pas rempli entièrement
		if (
			!nameInput.value ||
			!firstNameInput.value ||
			!mailInput.value ||
			!phoneInput.value
		) {
			// On affiche l'erreur
			alert("Veuillez complétez le formulaire");
		} else {
			// Créer un objet contact avec les valeurs des inputs
			let contact = {
				nom: nameInput.value,
				prenom: firstNameInput.value,
				telephone: phoneInput.value,
				mail: mailInput.value,
			};
			// L'objet contact est push dans le tableau
			tableau.push(contact);

			localStorage.setItem("contact", JSON.stringify(tableau));

			// AFFICHAGE TABLEAU
			affichageTableau();
			// RECUPERATION DE TOUT LES BUTTONS CRÉER AU DESSUS

			// APPARITION DANS LE HTML UNE FOIS DE TOUT LES PARAGRAPHES QUI CONTIENNE LA PRESENTATION
			// ÉCRASER LA LISTE PRÉCÉDENTE EN HTML POUR LA REMPLACER PAR LA NOUVELLE AVEC ELEMENT EN PLUS
		}
	});
}

function affichageTableau() {
	// On crée la variable paragraphe à vide
	let paragraphe;
	// On va créer la méthode forEach qui pour chaque element va :
	tableau.forEach(function (element, index) {
		// Créer un paragraphe
		paragraphe = document.createElement("p");
		// LUI ATTRIBUER UNE VALEUR
		paragraphe.innerHTML = `Je suis ${element.nom} ${element.prenom} <button class='delBtn'>Supprimer</button> <br/>`;
	});

	affichage.appendChild(paragraphe);

	let buttons = document.querySelectorAll(".delBtn");
	supprimer(buttons);
}

function supprimer(buttons) {
	// DÉCLENCHER UN FOR EACH QUI FAIT QUE POUR CHAQUE BUTTON ON VA FAIRE UNE ACTOn

	buttons.forEach(function (button, index) {
		// POur chaque button on va :
		button.addEventListener("click", function () {
			// supprimer dans le tableau du contact l'index une fois
			console.log("tableauAvant", tableau);
			tableau.splice(index, 1);

			button.parentElement.remove();

			console.log("tableauAprèsSuppression", tableau);
		});
	});
}
function affichageTableau2() {
	inputFilter = document.createElement("button");

	tableau2.filter(function (element, index) {
		if (inputFilter != null) {
			console.log(tableau2);
		}
	});
}

ajoutContact();

function showDistance(speed, time) {
	console.log(speed * time);
}
showDistance(10, 5);
showDistance(85, 1.5);
showDistance(12, 9);
showDistance(42, 21);

