
const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const btnPopup = document.querySelector(".btnLogin-popup");
const iconClose = document.querySelector(".icon-close");
const overlay = document.getElementById("overlay");

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const reEmailInput = document.getElementById("reEmail");
const rePasswordInput = document.getElementById("rePassword");
const usernameInput = document.getElementById('username');

registerLink.addEventListener("click", () => {
  wrapper.classList.add("active");
  emailInput.value = "";
  passwordInput.value = "";
});

loginLink.addEventListener("click", () => {
  wrapper.classList.remove("active");
  usernameInput.value = "";
  reEmailInput.value = "";
  rePasswordInput.value = "";
});

btnPopup.addEventListener("click", () => {
  wrapper.classList.add("active-popup");
  overlay.style.display = "block";
});

iconClose.addEventListener("click", () => {
  wrapper.classList.remove("active-popup");
  overlay.style.display = "none";
  emailInput.value = "";
  passwordInput.value = "";
});


