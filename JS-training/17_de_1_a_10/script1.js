let play = "oui";

/* Boucle principale */
while (play == "oui") {
	/* Initialisation des constantes et variables */
	const nombreADeviner = Math.trunc(Math.random() * 100); // Nombre à deviner aléatoire entre 0 et 100
	let essais = 9; // Nombre d'essais
	let nombreChoisi; // Nombre choisi

	/* Boucle de jeu */
	while (essais > 0 && nombreChoisi != nombreADeviner) {
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

		essais--;
	}

	/* Victoire ou défaite */
	if (nombreChoisi == nombreADeviner) {
		alert("Vous avez gagné");
	} else {
		alert("Vous avez perdu");
	}

	play = prompt("Voulez vous continuer à jouer? (oui, non)");
}
