const userInputNumber = document.querySelector("#userinput");
const playbutton = document.querySelector("#user-choice");
const userchoice = document.querySelector("#user-guessing-number");
const choiceResult = document.querySelector("#choice-result");
const resultReport = document.querySelector("#result-report");

function gameStart(event) {
  event.preventDefault();
  const userRangeNumber = userInputNumber.value;
  const userChoiceNumber = userchoice.value;

  if (userRangeNumber < 0) {
    alert("Please write a positive number");
  } else if (userChoiceNumber === "") {
    alert("Please guess a number.");
  } else if (userChoiceNumber > userRangeNumber) {
    alert("Please type in the number between 0 and " + userRangeNumber);
  } else {
    const computerRandomNumber = Math.floor(Math.random() * userRangeNumber);
    if (userChoiceNumber < computerRandomNumber) {
      numberResult(userChoiceNumber, computerRandomNumber);
      resultReport.innerText = "You lost!";
      resultReport.classList.remove("hidden");
    } else {
      numberResult(userChoiceNumber, computerRandomNumber);
      resultReport.innerText = "You Won!";
      resultReport.classList.remove("hidden");
    }
  }
}

function numberResult(userChoiceNumber, computerRandomNumber) {
  choiceResult.innerText = `You chose: ${userChoiceNumber}, The machine chose: ${computerRandomNumber}.`;
  choiceResult.classList.remove("hidden");
}

playbutton.addEventListener("submit", gameStart);