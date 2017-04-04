var link = document.querySelector(".enter");
var popup = document.querySelector(".modal");
var close = popup.querySelector(".close-map");
var login = popup.querySelector("[name=login]");
var pass = popup.querySelector("[name=password]");
var form = popup.querySelector("form");
var storage = localStorage.getItem("login");

link.addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.add("modal-show");
    login.focus();
    if (storage) {
        login.value = storage;
        email.focus();
    } else {
        login.focus();
    }
});
close.addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.remove("modal-show");
});
window.addEventListener("keydown", function (event) {
    if (event.keyCode == 27) {
        if (popup.classList.contains("modal-show")) {
            popup.classList.remove("modal-show");
        }
    }
});
form.addEventListener("submit", function (event) {
  if (!login.value || !pass.value) {
    event.preventDefault();
  }else {
    localStorage.setItem("login", login.value);
  }
});