
const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const btnPopup = document.querySelector(".btnLogin-popup");
const iconClose = document.querySelector(".icon-close");
const overlay = document.getElementById("overlay");
const logincontainer = document.getElementById('register');

registerLink.addEventListener("click", () => {
  wrapper.classList.add("active");
});

loginLink.addEventListener("click", () => {
  wrapper.classList.remove("active");
});

btnPopup.addEventListener("click", () => {
  wrapper.classList.add("active-popup");
  overlay.style.display = "block";
  logincontainer.style.display = "block";
});

iconClose.addEventListener("click", () => {
  wrapper.classList.remove("active-popup");
  overlay.style.display = "none";
  logincontainer.style.display = "block";
});
