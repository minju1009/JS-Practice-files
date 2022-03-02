const playBtn = document.querySelector(".play");
const result = document.querySelector(".result span:first-child");
const winLose = document.querySelector(".result span:last-child");


function showResult(event) {
    event.preventDefault();
    const rangeNumber = document.querySelector(".rangenumber").value;
    const guessingNumber = document.querySelector(".guessingnumber").value;
    if(parseInt(rangeNumber)<0){
        alert("input a number bigger than 0!")
        return;
    }else if(parseInt(guessingNumber)>parseInt(rangeNumber)){
        alert(`Your number is bigger than the range! Input a number between 0 and ${rangeNumber}`)
    }else
    {
        
        let computerNumber = Math.ceil(Math.random() * parseInt(rangeNumber));
        result.innerHTML = `You chose ${guessingNumber}, the machine chose: ${computerNumber}`;
        if(parseInt(guessingNumber)>=computerNumber){
            winLose.innerHTML=`You Win!`;
        } else {
            winLose.innerHTML=`You Lose!`;
        };
    }
}

playBtn.addEventListener("click", showResult);
