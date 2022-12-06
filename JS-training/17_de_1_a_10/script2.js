/* Initialisation la variable de jeu */
let play = "oui";

/* Boucle principale */
while (play == "oui") {
	/* Initialisation des constantes et variables */
	const nombreADeviner = Math.trunc(Math.random() * 100); // Nombre à deviner aléatoire entre 0 et 100
	let nombreChoisi; // Nombre choisi

	/* Boucle de jeu */
	for (let essais = 9; nombreChoisi != nombreADeviner && essais > 0; essais--) {
		/* Affichage du nombre d'essais restants */
		alert("Il vous reste " + essais + " essais");

		/* Choix du nombre */
		nombreChoisi = prompt("Veuillez choisir un nombre entre 0 et 100.");

		/* Vérification du nombre */
		if (nombreChoisi > nombreADeviner) {
			alert("C'est moins");
		} else if (nombreChoisi < nombreADeviner) {
			alert("C'est plus");
		}
	}

	/* Victoire ou défaite */
	if (nombreChoisi == nombreADeviner) {
		alert("Vous avez gagné");
	} else {
		alert("Vous avez perdu");
	}

	play = prompt("Voulez vous continuer à jouer? (oui, non)");
}
