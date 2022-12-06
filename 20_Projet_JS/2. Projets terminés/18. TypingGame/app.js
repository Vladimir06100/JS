const sentence = document.querySelector(".sentence-to-write");
const textareaToTest = document.querySelector(".textarea-to-test")
let spansFromAPISentence;

const APIEndpoint = "http://api.quotable.io/random";

async function getNewSentence(){

  try{
    const response = await fetch(APIEndpoint);

    if(!response.ok) throw new Error();

    const {content} = await response.json()

    sentence.textContent = "";

    content.split("").forEach(character => {
      const spanCharacter = document.createElement("span");
      spanCharacter.textContent = character;
      sentence.appendChild(spanCharacter)
    })
    spansFromAPISentence = sentence.querySelectorAll(".sentence-to-write span")

    textareaToTest.value = "";
    locked = false;
  }
  catch(error){
    sentence.textContent = error;
  }

}
getNewSentence()

const timeDisplayed = document.querySelector(".time");
const scoreDisplayed = document.querySelector(".score");

window.addEventListener("keydown", handleStart)

let time;
let score;
let timerID;

function handleStart(e){

  if(!sentence.textContent) sentence.textContent = "Attendez l'arrivée de la phrase."

  if(e.key === "Escape"){

    if(timerID) {
      clearInterval(timerID);
      timerID = undefined;
    }

    time = 5;
    score = 0;

    timeDisplayed.classList.add("active")
    textareaToTest.classList.add("active")

    timeDisplayed.textContent = `Temps : ${time}`;
    scoreDisplayed.textContent = `Score : ${score}`;
    textareaToTest.value = "";

    spansFromAPISentence.forEach(span => span.className = "")

    textareaToTest.addEventListener("input", handleTyping)
    textareaToTest.focus()
  }

}

let locked = false;
function handleTyping(e){

  if(locked) return;

  if(!timerID) startTimer()

  const completedSentence = checkSpans();

  if(completedSentence){
    locked = true;
    getNewSentence();
    score += spansFromAPISentence.length;
    scoreDisplayed.textContent = `Score : ${score}`
  }
}

function startTimer(){
  time--;
  timeDisplayed.textContent = `Temps : ${time}`;

  timerID = setInterval(handleTime, 1000)
}

function handleTime(){
  time--;
  timeDisplayed.textContent = `Temps : ${time}`;

  if(time === 0) {
    clearInterval(timerID);

    timeDisplayed.classList.remove("active");
    textareaToTest.classList.remove("active");

    const spansFromAPISentence = sentence.querySelectorAll("span");
    spansFromAPISentence.forEach(span => span.classList.contains("correct") ? score++ : "")

    scoreDisplayed.textContent = `Score : ${score}`
    textareaToTest.removeEventListener("input", handleTyping)
  }
}

function checkSpans(){
  const textareaCharactersArray = textareaToTest.value.split("")
  let completedSentence = true;
  let currentGoodLetters = 0;

  for(let i = 0; i < spansFromAPISentence.length; i++) {
    if(textareaCharactersArray[i] === undefined) {
      spansFromAPISentence[i].className = "";
      completedSentence = false;
    }
    else if(textareaCharactersArray[i] === spansFromAPISentence[i].textContent) {
      spansFromAPISentence[i].classList.remove("wrong");
      spansFromAPISentence[i].classList.add("correct");
      currentGoodLetters++;
    }
    else {
      spansFromAPISentence[i].classList.add("wrong");
      spansFromAPISentence[i].classList.remove("correct");
      completedSentence = false;
    }
  }

  scoreDisplayed.textContent = `Score : ${score + currentGoodLetters}
  `

  return completedSentence;
}