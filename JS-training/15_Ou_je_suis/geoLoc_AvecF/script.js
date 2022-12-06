"use strict";
let affichage;
// CRÉER UN EVENT QUI AU CLICK VA ME DÉCLENCHER MA LOCALISATION
function principal() {
	// RECUPERATION DES ELEMENTS DU DOM
	let add = document.querySelector(".add");
	let save = document.querySelector(".save");
	let getSave = document.querySelector(".getSave");
	let remove = document.querySelector(".delete");
	let affichage = document.querySelector(".affichage");

	add.addEventListener("click", function () {
		// Appel de l'API navigateur géolocalisation
		navigator.geolocation.getCurrentPosition(function (position) {
			// Stocker latitude et longitude dans des variables
			let latitude = position.coords.latitude;
			let longitude = position.coords.longitude;
			// AFFICHER NOTRE POSITION DANS UN PARAGRAPHE
			let pAdd = document.createElement("p");

			pAdd.innerText = "Latitude: " + latitude + " / Longitude: " + longitude;

			affichage.appendChild(pAdd);

			// SAUVEGARDE DE MA POSITION DANS LE LOCALSTORAGE
			// ON CRÉER UN ÉVÉNEMENT SUR LE BOUTON SAUVEGARDER
			save.addEventListener("click", function () {
				localStorage.setItem("latitude", latitude);
				localStorage.setItem("longitude", longitude);

				alert("Votre position à bien été sauvegardée");
			});
		});
	});

	getSaveFunction(getSave);

	removeFunction(remove);
}

function removeFunction(remove) {
	// Suppression
	remove.addEventListener("click", function () {
		// Supprimer de notre localStorage
		if (confirm("Voulez vous supprimer vos données sauvegardées")) {
			localStorage.removeItem("latitude");
			localStorage.removeItem("longitude");

			affichage.innerHTML = "";
		}
	});
}

function getSaveFunction(getSave) {
	// CREATION D'UN EVENT SUR LE BOUTON GETSAVE POUR RETROUVER MA POSITION SAUVEGARDE
	getSave.addEventListener("click", function () {
		// Retrouver nos valeurs dans le localStorage
		let LSlatitude = localStorage.getItem("latitude");
		let LSlongitude = localStorage.getItem("longitude");

		//   SI LSlatitude et LSlongitude existe (Si il y'a bien des données dans le LocalStorage)
		if (LSlatitude && LSlongitude) {
			//   Créer notre paragraphe qui va accueillir nos données
			let pSaved = document.createElement("p");
			pSaved.innerText =
				"Position Sauvegardée: " + LSlatitude + " / " + LSlongitude;
			affichage.appendChild(pSaved);
		} else {
			alert("Vous n'avez rien enregistré dans le localStorage");
		}
	});
}

principal();
