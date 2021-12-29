const btnSwitch = document.querySelector("#switch");

btnSwitch.addEventListener("click", () => {
  document.body.classList.toggle("dark"); // Con toggle si no esta la clase la añade y si esta la quita
  btnSwitch.classList.toggle("active"); // Con toggle si no esta la clase la añade y si esta la quita
});
