const loginForm = document.querySelector("#login-input");
const loginInput = document.querySelector("#login-input input")
const greeting = document.querySelector("#greeting");


function onLoginSubmit(event){
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem("username",username);
    paintGreeting(username);

}

function paintGreeting(username) {
    const today = new Date();
    const hour = today.getHours ();
    if (hour < 12) {
        greeting.innerText = `Good morning ${username}`;
        greeting.classList.remove("hidden");
    }else if (hour < 18) {
        greeting.innerText = `Good afternoon ${username}`;
        greeting.classList.remove("hidden");
    } else {
        greeting.innerText = `Good night ${username}`;
        greeting.classList.remove("hidden");
    }
    
}

const savedUsername = localStorage.getItem("username");

if (savedUsername === null) {
    loginForm.classList.remove("hidden");
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreeting(savedUsername);
}
