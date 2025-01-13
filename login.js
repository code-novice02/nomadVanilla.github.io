// declare form, input, hidden greeting
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

// declare string - class: hidden, inputValue: username
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

// loginForm: add hiddden tag | greeting: remove hidden tag, add innerText
function paintGreetings(username) {
    loginForm.classList.add(HIDDEN_CLASSNAME);
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = username;
}

// when LOGIN -> hide form and innerText username
function clickLoginButton(event) {
    event.preventDefault();
    const username = loginInput.value;
    // modify localStorage -> set username
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

// store username > savedUserName
const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", clickLoginButton);
}
else {
    paintGreetings(savedUserName);
}