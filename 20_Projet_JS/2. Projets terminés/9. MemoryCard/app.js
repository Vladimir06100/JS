"use strict";
const cards = document.querySelectorAll(".card");

function shuffleCards() {
	cards.forEach((card) => {
		const randomPos = Math.trunc(Math.random() * 12);
		// @ts-ignore
		card.style.order = randomPos;
	});
}
shuffleCards();

cards.forEach((card) => card.addEventListener("click", flipACard));

let lockedCards = false;
let cardsPicked = [];
function flipACard(e) {
	if (lockedCards) {
		return;
	}

	saveCard(e.target.children[0], e.target.getAttribute("data-attr"));

	if (cardsPicked.length === 2) {
		result();
	}
}

function saveCard(el, value) {
	if (el === cardsPicked[0]?.el) {
		return;
	}

	el.classList.add("active");
	cardsPicked.push({ el, value });
	console.log(cardsPicked);
}

function result() {
	saveNumberOftries();

	if (cardsPicked[0].value === cardsPicked[1].value) {
		cardsPicked[0].el.parentElement.removeEventListener("click", flipACard);
		cardsPicked[1].el.parentElement.removeEventListener("click", flipACard);
		cardsPicked = [];
		return;
	}

	lockedCards = true;
	setTimeout(() => {
		cardsPicked[0].el.classList.remove("active");
		cardsPicked[1].el.classList.remove("active");
		cardsPicked = [];
		lockedCards = false;
	}, 1000);
}

const innerCards = [...document.querySelectorAll(".double-face")];
const advice = document.querySelector(".advice");
const score = document.querySelector(".score");

let numberOfTries = 0;
function saveNumberOftries() {
	numberOfTries++;
	const checkForEnd = innerCards.filter(
		(card) => !card.classList.contains("active"),
	);
	if (!checkForEnd.length) {
		// @ts-ignore
		advice.textContent = `Bravo ! Appuyez sur "espace" pour relancer une partie.`;
		// @ts-ignore
		score.textContent = `Votre score final : ${numberOfTries}`;
		return;
	}
	// @ts-ignore
	score.textContent = `Nombre de coups ${numberOfTries}`;
}

window.addEventListener("keydown", handleRestart);

let shuffleLock = false;
function handleRestart(e) {
	e.preventDefault();
	if (e.keyCode === 32) {
		innerCards.forEach((card) => card.classList.remove("active"));
		// @ts-ignore
		advice.textContent = `Tentez de gagner avec le moins d'essais possible.`;
		// @ts-ignore
		score.textContent = `Nombre de coups : 0`;
		numberOfTries = 0;
		cards.forEach((card) => card.addEventListener("click", flipACard));

		if (shuffleLock) {
			return;
		}
		shuffleLock = true;
		setTimeout(() => {
			shuffleCards();
			shuffleLock = false;
		}, 600);
	}
}
