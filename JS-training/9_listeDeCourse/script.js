

// Fonction principal
function addCourses() {
	// Recuperation des éléments du DOM
	let input = document.querySelector(".inputCourse");
	let button = document.querySelector(".addBtn");
	let liste = document.querySelector(".list");

	// Création d'un event sur mon bouton avec un click
	button.addEventListener("click", function () {
		/************************************************************************************ */
		// Création d'une liste
		let li = document.createElement("li");
		// Ajout de la valeur de mon input dans la liste
		li.innerText = input.value;
		// Apparition de la li dans le parent liste (ul)
		liste.appendChild(li);
		/************************************************************************************ */
		// Modification
		// Création du bouton modifier
		let btnModif = document.createElement("button");
		// Ajout d'une valeur au bouton modifier
		btnModif.innerText = "Modifier";
		// Apparition du bouton dans la li
		li.appendChild(btnModif);
		/************************************************************************************ */
		// Supprimer
		// Création du bouton supprimer
		let btnSuppr = document.createElement("button");
		// Ajout d'une valeur au bouton supprimer
		btnSuppr.innerText = "supprimer";
		// Apparition du bouton dans la li
		li.appendChild(btnSuppr);
		/************************************************************************************ */

		// Rayer
		// Création du bouton rayer
		let btnRayer = document.createElement("button");
		// Ajout d'une valeur au bouton rayer
		btnRayer.innerText = "rayer";
		// Apparition du bouton dans la li
		li.appendChild(btnRayer);
		/************************************************************************************ */

		// On vide la barre d'input une fois l'ingrédient ajouter à la liste de course
		input.value = "";

		// Appel des fonctions secondaires avec les paramètres dont elles ont besoin vu que les variables sont disponible uniquement dans addCourse
		modif(btnModif, li, btnSuppr, btnRayer);
		// PAssage de la variable LI dans les paramètre de la fonction hover
		hover(li);
		supprimer(btnSuppr, li);
		rayer(btnRayer, li);
	});
}
// Fonction mouseover sur la LISTE
function hover(li) {
	li.addEventListener("mouseover", function () {
		li.style.color = "blue";
	});
}

// Function modifier la valeur à l'interieur de la liste
function modif(btnModif, li, btnSuppr, btnRayer) {
	btnModif.addEventListener("click", function () {
		// li qui était avant une liste devient un input
		li.innerHTML = "<input type='text'>";

		// On déclenche un addEvent listener sur LI devenu input qui fait que à la touche entrer:
		li.addEventListener("keydown", function (e) {
			// Si j'ai appuyé sur la touche entrée
			if (e.key == "Enter") {
				// ON PEUT DEMANDER CONFIRMATION POUR ÊTRE SUR QUE L'UTILISATEUR NE S'EST PAS TROMPE if(confirm(Êtes vous sure ?))

				// On écrase l'input qui redevient liste et on met la valeur de l'ancien input dans la liste
				li.innerText = e.target.value;
				// Et on refait apparaître le bouton modifier
				li.appendChild(btnModif);
				// Et on refait apparaître le bouton supprimer
				li.appendChild(btnSuppr);
				// Et on refait apparaître le bouton rayer
				li.appendChild(btnRayer);
			}
		});
	});
}

// supprimer la li de la ul
function supprimer(btnSuppr, li) {
	btnSuppr.addEventListener("click", function () {
		// on supprime notre li
		li.remove();
	});
}

// Rayer ou dérayer la li au click du bouton
function rayer(btnRayer, li) {
	btnRayer.addEventListener("click", function () {
		// Si le style de la li text Decoration est égal à line through on le remet normal
		if (li.style.textDecoration == "line-through") {
			li.style.textDecoration = "";
		}
		// SINON on passe le style de la li à Line-through
		else {
			li.style.textDecoration = "line-through";
		}
	});
}

// Appel de ma fonction principal
addCourses();
