const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  
  var sign_in_btn = location.replace("index.html")
  container.classList.add("sign_in_btn");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
  
});