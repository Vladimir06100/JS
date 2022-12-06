"use strict";
// Variables

let EN = 10;
let FAIM = 0;
let JOIE = 5;
let choix;

// Fonction non utilisée finalement

// function tamagotchi (EN, FAIM, JOIE) {
//     console.log ("Energie: " + EN + " Faim: " + FAIM + " JOIE: " + JOIE)
// }
// tamagotchi (10, 0, 5);

// Fonction "Jouer" qui change les statistiques du tamagotchi à chaque action
function play() {
	EN = EN - 2;
	FAIM = FAIM + 1;
	JOIE = JOIE + 1;
	let play = EN + FAIM + JOIE;
}
play();

// Fonction "Manger" qui change les statistiques du tamagotchi à chaque action
function eat(test1, test2, test3) {
	EN = EN + 2;
	FAIM = FAIM - 1;
	JOIE = JOIE - 1;
	let eat = EN + FAIM + JOIE;
}
eat();

// Fonction "GameOver", si l'une des variables est atteinte la partie se termine (->voir explication boucle)
function gameover() {
	let dead;
	if (EN < 0 || JOIE < 0 || FAIM > 5) {
		dead = true;
	} else {
		dead = false;
	}
	return dead;
}

// Boucle avec choix. Si on éteint le tamagotchi on sort de la boucle. Si GameOver, une alerte gameover s'affiche et la boucle devrait s'arreter également.
while (choix != "3" && gameover() != true) {
	gameover();
	choix = prompt(
		"Votre Tamagotchi fait du bruit. Voulez vous 1/ Jouer 2/ Nourrir 3/Eteindre ?",
	);

	if (choix == 1) {
		let choix = play();
		alert(
			"Votre Tamagotchi est ravi d'avoir joué avec vous. Stats actuelles: Energie: " +
				EN +
				" Faim: " +
				FAIM +
				" JOIE: " +
				JOIE,
		);
	} else if (choix == 2) {
		gameover();
		let choix = eat();
		alert(
			"Votre Tamagotchi a encore faim! Stats actuelles: Energie: " +
				EN +
				" Faim: " +
				FAIM +
				" JOIE: " +
				JOIE,
		);
	} else {
		if (choix == "3") {
			alert("A bientôt");
		} else {
			alert("Veuillez selectionner une option.");
		}
	}
	if (gameover()) {
		alert("GAME OVER");
	}
}
