'use strict';
// CORRECTION GEOLOCALISATION PART 1

// RECUPERATION DES ELEMENTS DU DOM
let add = document.querySelector(".add");
let save = document.querySelector(".save");
let getSave = document.querySelector(".getSave");
let remove = document.querySelector(".delete");
let affichage = document.querySelector(".affichage");

// CREER UN EVENT QUI AU CLICK VA ME DECLENCHER MA LOCALISATION

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

    // SAUVEGARDE DE MA POSITION DANS LE LOCALSTORAGE
    // ON CREER UN EVENEMENT SUR LE BOUTON SAUVEGARDER
    save.addEventListener("click", function () {
      localStorage.setItem("latitude", latitude);
      localStorage.setItem("longitude", longitude);

      alert("Votre position à bien été sauvegardée");
    });
  });
});

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

// Suppression
remove.addEventListener("click", function () {
  // Supprimer de notre localStorage
  if (confirm("Voulez vous supprimer vos données sauvegardées")) {
    localStorage.removeItem("latitude");
    localStorage.removeItem("longitude");

    affichage.innerHTML = "";
  }
});
