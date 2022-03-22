// burger menu
const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");

function navToggle() {
  btn.classList.toggle("open");
  nav.classList.toggle("hidden");
  document.body.classList.toggle("no-scroll");
}

btn.addEventListener("click", navToggle);

//payment

function myFunction() {
  // Get the checkbox
  var checkBox = document.getElementById("mobilepay-check");
  // Get the output text
  var text = document.getElementById("mobilepay");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true) {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}

function myFunction2() {
  // Get the checkbox
  var checkBox = document.getElementById("dankort");
  // Get the output text
  var text = document.getElementById("kort-betaling");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true) {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}
