function getRandomNumber(min,max){
  let randomNumber = crypto.getRandomValues(new Uint32Array(1))[0]
  
  // 32 bits = max de 0 à 4 294 967 295
  randomNumber = randomNumber / 4294967296

  return Math.trunc(randomNumber * (max - min + 1)) + min;
}

function addASet(fromCode, toCode) {
  let charactersList = "";
  for(let i = fromCode; i <= toCode; i++) {
    charactersList += String.fromCharCode(i)
  }
  return charactersList;
}

const charactersSet = {
  lowercaseChars : addASet(97,122),
  upperCaseChars : addASet(65,90),
  numbers : addASet(48,57),
  symbols : addASet(33,47) + addASet(58,64) + addASet(91,96) + addASet(123,126),
}

const range = document.querySelector("input[type='range']")
const rangeLabel = document.querySelector(".range-group label");

rangeLabel.textContent = `Taille du mot de passe : ${range.value}`
let passwordLength = range.value;

const passwordContent = document.querySelector(".password-content");
const errorMsg = document.querySelector(".error-msg");
const generateBtn = document.querySelector(".generate-password-btn");
const checkboxes = document.querySelectorAll("input[type='checkbox']")

generateBtn.addEventListener("click", createPassword)

function createPassword(){
  const checkedDataSets = checkedSets()

  if(!checkedDataSets.length){
    errorMsg.textContent = "Au moins une case doit être cochée !"
    return;
  }
  else errorMsg.textContent = "";

  const concatenatedDataSets = checkedDataSets.reduce((acc, cur) => acc + cur)
 
  let password = "";

  // caractères de base
  let passwordBase = [];
  for(let i = 0; i < checkedDataSets.length; i++){
    passwordBase.push(checkedDataSets[i][getRandomNumber(0,checkedDataSets[i].length - 1)])
  }
  
  // reste du mdp
  for(let i = checkedDataSets.length; i < passwordLength; i++) {
    password += concatenatedDataSets[getRandomNumber(0, concatenatedDataSets.length - 1)]
  }
  
  // mélange
  passwordBase.forEach((item, index) => {
    const randomIndex = getRandomNumber(0, password.length);
    password = password.slice(0,randomIndex) + passwordBase[index] + password.slice(randomIndex);
  })

  passwordContent.textContent = password;
}
createPassword()
function checkedSets(){
  const checkedSets = [];
  checkboxes.forEach(checkbox => checkbox.checked && checkedSets.push(charactersSet[checkbox.id]));

  return checkedSets;
}
console.log(checkedSets());


range.addEventListener("input", handleRange)

function handleRange(e){
  passwordLength = e.target.value;
  rangeLabel.textContent = `Taille du mot de passe : ${passwordLength}`
}

const copyBtn = document.querySelector(".copy-btn");
copyBtn.addEventListener("click", copyPassword)

let locked = false;
function copyPassword(){
  navigator.clipboard.writeText(passwordContent.textContent);

  if(!locked) {
    copyBtn.classList.add("active")
    locked = true;

    setTimeout(() => {
      copyBtn.classList.remove("active")
      locked = false;
    }, 600)
  }
}