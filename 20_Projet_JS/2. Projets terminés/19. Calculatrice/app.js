const calculatorData = {
  calculation: "",
  result: "",
  displayedResults: false
}

const buttons = [...document.querySelectorAll("[data-action]")]
const digitsBtns = buttons.filter(button => /[0-9]/.test(button.getAttribute("data-action")))

digitsBtns.forEach(btn => btn.addEventListener("click", handleDigits))

const calculationDisplay = document.querySelector(".calculation");
const resultDisplay = document.querySelector(".result");

function handleDigits(e){
  const buttonValue = e.target.getAttribute("data-action");

  if(calculatorData.displayedResults){
    calculationDisplay.textContent = "";
    calculatorData.calculation = "";
    calculatorData.displayedResults = false;
  }
  else if(calculatorData.calculation === "0") calculatorData.calculation = "";

  calculatorData.calculation += buttonValue;
  resultDisplay.textContent = calculatorData.calculation;
}

const operatorsBtns = buttons.filter(button => /[\/+*-]/.test(button.getAttribute("data-action")))

operatorsBtns.forEach(btn => btn.addEventListener("click", handleOperators))

function handleOperators(e){
  const buttonValue = e.target.getAttribute("data-action");

  if(calculatorData.displayedResults){
    calculationDisplay.textContent = "";
    calculatorData.calculation = calculatorData.result += buttonValue;
    resultDisplay.textContent = calculatorData.calculation;
    calculatorData.displayedResults = false;
    return;
  }
  else if(!calculatorData.calculation && buttonValue === "-"){
    calculatorData.calculation += buttonValue;
    resultDisplay.textContent = calculatorData.calculation;
    return;
  }
  else if(!calculatorData.calculation || calculatorData.calculation.slice(-1) === ".") return;
  else if(calculatorData.calculation.slice(-1).match(/[\/+*-]/) && calculatorData.calculation.length !== 1){
    calculatorData.calculation = calculatorData.calculation.slice(0, -1) + buttonValue;
    resultDisplay.textContent = calculatorData.calculation;
  }
  else if(calculatorData.calculation.length !== 1) {
    calculatorData.calculation += buttonValue;
    resultDisplay.textContent = calculatorData.calculation;
  }
}

const decimalButton = document.querySelector("[data-action='.']")

decimalButton.addEventListener("click", handleDecimal);

function handleDecimal (){
  if(!calculatorData.calculation) return;

  let lastSetOfNumbers = "";

  for(let i = calculatorData.calculation.length - 1; i >= 0; i--) {
    if(/[\/+*-]/.test(calculatorData.calculation[i])){
      break;
    }
    else {
      lastSetOfNumbers += calculatorData.calculation[i];
    }
  }
  
  if(!lastSetOfNumbers.includes(".")) {
    calculatorData.calculation += ".";
    resultDisplay.textContent = calculatorData.calculation;
  }
}

const equalBtn = document.querySelector("[data-action='=']")

equalBtn.addEventListener("click", handleEqualBtn);

function handleEqualBtn(){
  if(/[\/+*-.]/.test(calculatorData.calculation.slice(-1))){
    calculationDisplay.textContent = "Terminez le calcul par un chiffre.";
    setTimeout(() => {
      calculationDisplay.textContent = "";
    }, 2500)
    return;
  }
  else if(!calculatorData.displayedResults){
    calculatorData.result = customEval(calculatorData.calculation)
    resultDisplay.textContent = calculatorData.result;
    calculationDisplay.textContent = calculatorData.calculation;
    calculatorData.displayedResults = true;
  }
}


function customEval(calculation){
  if(!/[\/+*-]/.test(calculation.slice(1))) return calculation;

  // 550*60
  let operator;
  let operatorIndex;
  if(/[\/*]/.test(calculation.slice(1))) {
    for(let i = 1; i < calculation.length; i++){
      if(/[\/*]/.test(calculation[i])){
        operator = calculation[i];
        operatorIndex = i;
        break;
      }
    }
  } else {
    for(let i = 1; i < calculation.length; i++){
      if(/[+-]/.test(calculation[i])){
        operator = calculation[i];
        operatorIndex = i;
        break;
      }
    }
  }

  const operandsInfo = getIndexes(operatorIndex, calculation) 
  console.log(operandsInfo);

  let currentCalculationResult;
  switch(operator){
    case "+":
      currentCalculationResult = Number(operandsInfo.leftOperand) + Number(operandsInfo.rightOperand)
      break;
    case "-":
      currentCalculationResult = Number(operandsInfo.leftOperand) - Number(operandsInfo.rightOperand)
      break;      
    case "*":
      currentCalculationResult = Number(operandsInfo.leftOperand) * Number(operandsInfo.rightOperand)
      break;  
    case "/":
      currentCalculationResult = Number(operandsInfo.leftOperand) / Number(operandsInfo.rightOperand)
      break;  
  }
  

  let updatedCalculation = calculation.replace(calculation.slice(operandsInfo.startIntervalIndex, operandsInfo.lastRightOperandCharacter), currentCalculationResult.toString())

  if(/[\/+*-]/.test(updatedCalculation.slice(1))) {
    customEval(updatedCalculation)
  }

  console.log(updatedCalculation.split("."));
  if(updatedCalculation.includes(".")) {
    if(updatedCalculation.split(".")[1].length === 1){
      return Number(updatedCalculation).toString();
    }
    else if(updatedCalculation.split(".")[1].length > 1) {
      return Number(updatedCalculation).toFixed(2).toString();
    }
  }
  else {
    return updatedCalculation;
  }
}

// 5500+5065465564+600
function getIndexes(operatorIndex, calculation){

  let rightOperand = "";
  let lastRightOperandCharacter;

  for(let i = operatorIndex + 1; i <= calculation.length; i++) {
    if(i === calculation.length) {
      lastRightOperandCharacter = calculation.length;
      break;
    }
    else if(/[\/+*-]/.test(calculation[i])) {
      lastRightOperandCharacter = i;
      break;
    }
    else {
      rightOperand += calculation[i];
    }
  }

  let leftOperand = "";
  let startIntervalIndex;

  for(let i = operatorIndex - 1; i >= 0; i--) {
    if(i === 0 && /[-]/.test(calculation[i])) {
      startIntervalIndex = 0;
      leftOperand += "-";
      break;
    }
    else if(i === 0){
      startIntervalIndex = 0;
      leftOperand += calculation[i];
      break;
    }
    else if(/[\/+*-]/.test(calculation[i])) {
      startIntervalIndex = i + 1;
      break;
    }
    else {
      leftOperand += calculation[i];
    }
  }

  leftOperand = leftOperand.split("").reverse().join("");

  return {
    leftOperand,
    rightOperand,
    startIntervalIndex,
    lastRightOperandCharacter
  }

}

const resetButton = document.querySelector("[data-action='c']")

resetButton.addEventListener("click", reset);

function reset(){
  calculatorData.calculation = "";
  calculatorData.displayedResults = false;
  calculatorData.result = "";
  resultDisplay.textContent = "0";
  calculationDisplay.textContent = "";
}

const clearEntryButton = document.querySelector("[data-action='ce']")

clearEntryButton.addEventListener("click", clearEntry);

function clearEntry(){

  if(!calculatorData.displayedResults){
    if(resultDisplay.textContent[0] === "0") return;
    else if(resultDisplay.textContent.length === 1) {
      calculatorData.calculation = "0";
    }
    else {
      calculatorData.calculation = calculatorData.calculation.slice(0,-1)
    }
    resultDisplay.textContent = calculatorData.calculation;
  }

}

