const userInputNumber = document.querySelector("#userinput");
const playbutton = document.querySelector("#user-choice");
const userchoice = document.querySelector("#user-guessing-number");
const choiceResult = document.querySelector("#choice-result");
const resultReport = document.querySelector("#result-report");




function gameStart(USERINPUTNUMBER, userChoiceNumber) {
    userInputNumber.preventDefault();
    userChoiceNumber.preventDefault();
    const userRangeNumber = userInputNumber.value;
    const userChoiceNumber = userchoice.value;
    
    if(userRangeNumber < 0) {
        alert("Please write a positive number");
    }else if (userChoiceNumber === ""){
        alert("Please guess a number.")
    } else if (userChoiceNumber > userRangeNumber){
        alert("Please type in the number between 0 and " + userRangeNumber)
    } else {
        const computerRandomNumber = Math.floor(Math.random()*userRangeNumber);
        if (userChoiceNumber<computerRandomNumber){
            numberResult (userChoiceNumber, computerRandomNumber);
            declareResult (lost);
        }
        else {
            numberResult (userChoiceNumber, computerRandomNumber);
            declareResult (won);
        }
        
    }        
}


function numberResult (userChoiceNumber, computerRandomNumber){
    choiceResult.innerText= `You chose: ${userChoiceNumber}, The machine chose: ${computerRandomNumber}`;
    choiceResult.classList.remove("hidden");
}

function declareResult (result) {
    resultReport.innerText = `You ${result}!`;
    resultReport.classList.remove("hidden");
}


playbutton.addEventListener("submit",gameStart);
