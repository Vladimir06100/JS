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

// Création d'un tableau qui vas stocker tout les contacts
let tableau;
let tableauFiltre = [];

// Si le localStorage Contact n'est pas vide la variable tableau prend la valeur du LocalStorage
if (localStorage.getItem("contact")) {
	tableau = JSON.parse(localStorage.getItem("contact"));
	// Function affichage tableau

	// On créer la variable paragraphe à vide
	let paragraphe = " ";
	// On va créer la méthode forEach qui pour chaque element va :
	tableau.forEach(function (element, index) {
		// LUI ATTRIBUER UNE VALEUR
		paragraphe += `<p>Je suis ${element.nom} ${element.prenom} <button class='delBtn'>Supprimer</button> </p> <br/>`;
	});

	affichage.innerHTML = paragraphe;

	let buttons = document.querySelectorAll(".delBtn");
} else {
	tableau = [];
}

// Function de création du contact

// On met un event listener sur notre bouton ajouter qui va:
addInput.addEventListener("click", function (e) {
	// Empecher la page de se recharger
	e.preventDefault();
	// Si le formulaire n'est pas rempli entièrement
	if (
		!nameInput.value ||
		!firstNameInput.value ||
		!mailInput.value ||
		!phoneInput.value
	) {
		// On affiche l'erreur
		alert("Veuillez completez le formulaire");
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

		// Une fois le contact ajouté au tableau j'enregistre le tableau dans le localStorage
		localStorage.setItem("contact", JSON.stringify(tableau));

		// AFFICHAGE TABLEAU
		// On créer la variable paragraphe à vide
		let paragraphe = " ";
		// On va créer la méthode forEach qui pour chaque element va :
		tableau.forEach(function (element, index) {
			// LUI ATTRIBUER UNE VALEUR
			paragraphe += `<p>Je suis ${element.nom} ${element.prenom} <button class='delBtn'>Supprimer</button> </p> <br/>`;
		});

		affichage.innerHTML = paragraphe;

		let buttons = document.querySelectorAll(".delBtn");
		// RECUPERATION DE TOUT LES BUTTONS CREER AU DESSUS
		// DECLENCHER UN FOR EACH QUI FAIT QUE POUR CHAQUE BUTTON ON VA FAIRE UNE ACTIOn

		buttons.forEach(function (button, index) {
			// POur chaque button on va :
			button.addEventListener("click", function () {
				// supprimer dans le tableau des contact l'index une fois

				tableau.splice(index, 1);
				localStorage.setItem("contact", JSON.stringify(tableau));
				button.parentElement.remove();
			});
		});
		// APPARITION DANS LE HTML UNE FOIS DE TOUT LES PARAGRAPHES QUI CONTIENNE LA PRESENTATION
		// ECRASER LA LISTE PRECEDENTE EN HTML POUR LA REMPLACER PAR LA NOUVELLE AVEC L'ELEMENT EN PLUS
	}
});

// Suppression du contact

// Function affichage Filtre

// Filtrage du tableau

// L'evenement keydown sur l'input avec la touche entrer
inputFilter.addEventListener("keydown", function (e) {
	if (e.key == "Enter") {
		affichageFiltre.innerHTML = "";

		// Tableau
		tableauFiltre = tableau.filter(function (element) {
			return (
				// Est-ce que RO va être présent à l'interieur de mon element.nom
				element.nom.toLowerCase().indexOf(inputFilter.value.toLowerCase()) != -1
			);
		});

		// On créer la variable paragraphe à vide

		// On va créer la méthode forEach qui pour chaque element va :
		tableauFiltre.forEach(function (element, index) {
			// Créer un paragraphe

			// LUI ATTRIBUER UNE VALEUR
			affichageFiltre.innerHTML += `<p>Je suis ${element.nom} ${element.prenom} </p> <br/>`;
		});
	}
});
