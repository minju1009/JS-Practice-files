const title = document.querySelector("div.hello:first-child h1");

console.dir(title);

function handleTitleClick() {
    title.style.color = "blue";
}

function handleMouseEnter() {
    title.innerText = "Mouse is here!";
}

function handleMouseLeave() {
    title.innerText = "Mouse is gone!";
}

function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}

function handleWindowOffline () {
    alert("SOS no WIFI");
}


title.addEventListener("click",  handleMouseEnter);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindoWResize);
window.addEventListener("offline", handleWindowOffline);


