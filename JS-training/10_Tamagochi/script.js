/** Fonction principale */

//  CREATION DE LA FONCTION PRINCIPALE CELLE QUI DÉCLENCHE TOUTE LES ACTIONS
function tamagotchi() {
	// CRÉER LES VARIABLES
	let EN = 10;
	let FAIM = 0;
	let JOIE = 5;

	/**
	 * Appel de la fonction choose Action
	 */
	// ON ENVOI LES VARIABLE DANS CHOOSE ACTION
	chooseAction(EN, FAIM, JOIE);
}

/**
 * Création de la fonction avec la boucle
 */
// REÇOIT LES VARIABLES DE TAMAGOTCHI
function chooseAction(EN, FAIM, JOIE) {
	let action;
	// BOUCLE QUI GERE LA VIE DU TAMAGOCHI TANT QUE FAIM INFÉRIEUR A 5 && JOIE > 0 && ENERGIE > 0
	while (FAIM <= 5 && JOIE >= 0 && EN >= 0 && action != "3") {
		// CHOIX UTILISATEUR DE L'ACTION A EFFECTUE
		action = prompt(
			"Que souhaitez-vous faire? \n 1 - Jouer | \n  2 - nourrir | \n  3-Sortir du jeu"
		);

		// ACTION 1 CHOISI PAR L'UTILISATEUR
		if (action == "1") {
			// ON ENLEVÉ 2 ENERGIE ON AJOUTE 1 DE FAIM ET 1 DE JOIE
			EN -= 2;
			FAIM++;
			JOIE++;
			// ON ENVOI LES PARAMÈTRE DE CHOOSE ACTION A LA FONCTION AUTOPSIE
			autopsie(FAIM, EN, JOIE);
		}
		// ACTION CHOISI PAR L'UTILISATEUR
		else if (action == "2") {
			// ON ENLEVÉ UN DE FAIM UN DE JOIE ET ON AJOUTE DEUX ENERGIES
			FAIM--;
			JOIE--;
			EN += 2;
			// ON ENVOI LES PARAMÈTRE DE CHOOSE ACTION A LA FONCTION AUTOPSIE
			autopsie(FAIM, EN, JOIE);
		}
		// ACTION UTILISATEUR CHOIX TROIS
		else if (action == "3") {
			// ON SORT DE LA BOUCLE ET ON ENVOI UN MESSAGE POUR DIRE AU REVOIR
			alert("A bientôt !");
		} else {
			// SI L'UTILISATEUR C'EST TROMPE DE CHOIX
			alert("Erreur veuillez recommencer !");
		}
	}
}

/*
 * État du tamagotchi après choix de l'action
 */
// RECEVOIR LES PARAMÈTRES DE LA FONCTION CHOOSE ACTION
function autopsie(FAIM, EN, JOIE) {
	//  SI IL EST MORT DE FAIM ON ENVOI UN MESSAGE ET ON PROPOSE DE RECOMMENCER
	if (FAIM > 5) {
		alert("Votre tamagotchi est mort de faim !");
		restart();
	} else if (EN < 0) {
		alert("Votre tamagotchi est mort de fatigue !");
		restart();
	} else if (JOIE < 0) {
		alert("Votre tamagotchi s'est suicidé !");
		restart();
	}
	// TAMAGOCHI IL EST PAS MORT DU COUP ON ENVOI UNE FONCTION QUI VA AFFICHER SES CONSTANTES VITALES
	else {
		tamagochiStatut(FAIM, EN, JOIE);
	}
}

/** Rappel du statut  */

function tamagochiStatut(FAIM, EN, JOIE) {
	//   SI LE TAMAGOCHI EST A UN POINT DE FAIM DE MOURIR ON ENVOI UNE ALERTE POUR PRÉVENIR
	if (FAIM >= 4 && FAIM <= 5) {
		alert(
			"Votre Tamagotchi a les caractéristiques suivantes:  \n  Energie = " +
				EN +
				"; \n  Faim = " +
				FAIM +
				"; \n  Joie =" +
				JOIE +
				" \n  Votre tamagotchi a faim, pensez à le nourrir!"
		);
	}
	// SINON SI LE TAMAGOCHI EST A UN POINT D'ENERGIE DE MOURIR ON ENVOI UNE ALERTE
	else if (EN >= 0 && EN <= 2) {
		alert(
			"Votre Tamagotchi a les caractéristiques suivantes:  \n Energie = " +
				EN +
				"; \n Faim = " +
				FAIM +
				"; \n Joie =" +
				JOIE +
				" \n Votre tamagotchi est épuisé, veillez à ce qu'il se repose!"
		);
	}
	// SINON SI LE TAMAGOCHI EST A UN POINT DE JOIE DE MOURIR ON ENVOI UNE ALERTE
	else if (JOIE >= 0 && JOIE <= 1) {
		alert(
			"Votre Tamagotchi a les caractéristiques suivantes:  \n Energie = " +
				EN +
				";  \n Faim = " +
				FAIM +
				"; \n Joie =" +
				JOIE +
				" \n Votre tamagotchi est très triste, jouer lui ferait du bien!"
		);
	}
	// PAS D'ALERTE SPECIAL ON ENVOI LES CONSTANTES NORMAL
	else {
		alert(
			"Votre Tamagotchi a les caractéristiques suivantes: \n Energie = " +
				EN +
				"; \n Faim = " +
				FAIM +
				"; \n Joie =" +
				JOIE
		);
	}
}

/** Voulez-vous recommencer */

function restart() {
	//  ON PROPOSE A L'UTILISATEUR DE RECOMMENCER
	let restart = prompt("Voulez-vous recommencer? 1/  Oui | 2/  Non");

	// SI IL DIT OUI ON RELANCE LA GROSSE FONCTION PRINCIPAL TAMAGOCHI
	if (restart == "1") {
		tamagotchi();
	}
	// SINON SI IL DIT NON ON FERME LA FENÊTRE ET LE JEU EST TERMINE
	else if (restart == "2") {
		alert("A bientôt");
	}
	// SINON MESSAGE D'ERREUR VEUILLEZ RÉESSAYER
	else {
		alert("Cette action n'est pas autorisée, veuillez recommencer");
	}
}

/**
 * Appel de ma fonction principal
 */

tamagotchi();
