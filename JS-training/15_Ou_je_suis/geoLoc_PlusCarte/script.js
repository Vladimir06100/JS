"use strict";
let L;
//  INITIALISATION DE LA CARTE LEAFLET
let map = L.map("map").setView([51.505, -0.09], 13);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
	maxZoom: 19,
	attribution: "© OpenStreetMap",
}).addTo(map);
// FIN INITIALISATION

// CREER UN EVENT QUI AU CLICK VA ME DECLENCHER MA LOCALISATION
function principal() {
	// RECUPERATION DES ELEMENTS DU DOM
	let add = document.querySelector(".add");
	let save = document.querySelector(".save");
	let getSave = document.querySelector(".getSave");
	let remove = document.querySelector(".delete");
	let affichage = document.querySelector(".affichage");

	add.addEventListener("click", function () {
		// Appel de l'API navigateur geolocalisation
		navigator.geolocation.getCurrentPosition(function (position) {
			// Stocker latitude et longitude dans des variables
			let latitude = position.coords.latitude;
			let longitude = position.coords.longitude;
			// AFFICHER NOTRE POSITION DANS UN PARAGRAPHE
			let pAdd = document.createElement("p");

			pAdd.innerText = "Latitude: " + latitude + " / Longitude: " + longitude;

			affichage.appendChild(pAdd);
			//   Animation de la map qui se dirige vers notre localisation
			map.flyTo([latitude, longitude], 15);
			// Apparition du marker sur cette même localisation
			let marker = L.marker([latitude, longitude]).addTo(map);
			// On va lier un pop up à notre marker
			marker
				.bindPopup(
					"<b>Hello world! Je suis bien ici au bocal Academy</b><br>I am a popup.",
				)
				.openPopup();

			// Créer un pop up générique
			const popup = L.popup();

			//   Création la fonction on MapClick qui va déclencher un pop up sur chaque clique de la carte à sa nouvelle position
			function onMapClick(e) {
				popup
					// On dit la position du pop up
					.setLatLng(e.latlng)
					//   On modifie son contenue
					.setContent("voici les coordoonnées" + e.latlng.toString())
					//   On lui dit de s'afficher dans la carte
					.openOn(map);
			}

			//   Création de l'évenement sur la carte qui déclenche la fonction onMapClick
			map.on("click", onMapClick);

			// SAUVEGARDE DE MA POSITION DANS LE LOCALSTORAGE
			// ON CREER UN EVENEMENT SUR LE BOUTON SAUVEGARDER
			save.addEventListener("click", function () {
				localStorage.setItem("latitude", latitude);
				localStorage.setItem("longitude", longitude);

				alert("Votre position à bien été sauvegardée");
			});
		});
	});

	getSaveFunction(getSave, affichage);

	removeFunction(remove, affichage);
}

function removeFunction(remove, affichage) {
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

function getSaveFunction(getSave, affichage) {
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
