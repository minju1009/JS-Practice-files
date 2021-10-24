const h1 = document.querySelector(".hello:first-child h1");


function handleTitleClick() {
    h1.classList.toggle("clicked");
}

h1.addEventListener("click", handleTitleClick);




const background = document.querySelector("body");
const colors = ["#2E8CD5", "#2E8CD5", "#914EAD"];

function resize(){
  const currentSize = window.innerWidth;
  if(currentSize<=400){
    background.style.backgroundColor = colors[1];
  } else 
}

