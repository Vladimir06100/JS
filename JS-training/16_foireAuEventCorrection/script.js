"use strict";
// CLIQUE SUR LES BOUTONS
// RECUPERATION DIV BOUTON

// creation de la function choix avec paramètre numéro du button
function choix(numerodubutton) {
	// affichage du numéro du button //
	console.log(numerodubutton);
	// recuperation le bouton avec le paramètre numerodubutton
	let button = document.querySelector("#btn-" + numerodubutton);

	// déclenche un event sur nos button type: click, action: affichage console.log
	button.addEventListener("click", function () {
		console.log("Clique sur le bouton" + numerodubutton);
	});
}

// appel function button(1)
choix(1);
// appel function button(2)
choix(2);
// appel function button(3)
choix(3);
// appel function button(4)
choix(4);

// PASSAGE DE SOURIS SUR LES BLOCS
function bloc(numerodubloc) {
	let bloc = document.querySelector("#bloc-" + numerodubloc);

	bloc.addEventListener("mouseover", function () {
		bloc.style.backgroundColor = "blue";
		console.log("passe sur le bloc" + numerodubloc);
	});
}
// FONCTION QUI VA FAIRE EN SORTE QUE LES BLOCS REVIENNENT A LEURS COULEURS ORIGINAL
function blocOut(numerodubloc) {
	let bloc = document.querySelector("#bloc-" + numerodubloc);

	bloc.addEventListener("mouseout", function () {
		bloc.style.backgroundColor = "";
	});
}

// Appel de la fonction bloc avec les
bloc(1);
bloc(2);
bloc(3);

blocOut(1);
blocOut(2);
blocOut(3);

// SAISIE D'UN CARACTÈRE SUR LE CHAMP INPUT
function input() {
	let input = document.querySelector("#input-text");
	input.addEventListener("keydown", function (e) {
		// SI LA TOUCHE APPUYER EST ÉGAL A ENTRER
		if (e.key === "Enter") {
			alert("Formulaire envoyé");
			input.value = "";
		}
		// SINON
		else {
			let paragraphe = document.querySelector(".inputResult");
			paragraphe.innerText = input.value;
		}
	});
}

input();

//  DEFILEMENT DE LA PAGE

function scrolling() {
	// On déclenche un événement scroll sur la fenêtre entière qui va déclencher une alerte
	window.addEventListener("scroll", function () {
		console.log("J'ai scroll");
	});
}

scrolling();
