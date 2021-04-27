const form = document.querySelector("#contactform");
const name = document.querySelector("#name");
const textarea = document.querySelector("#textarea");
const email = document.querySelector("#email");
const address = document.querySelector("#address");

function formValidation() {
  event.preventDefault();
  if (name.value.trim().length > 0) {
    nameerror.style.display = "none";
  } else {
    nameerror.style.display = "block";
  }
  if (textarea.value.trim().length > 9) {
    subjecterror.style.display = "none";
  } else {
    subjecterror.style.display = "block";
  }

  if (emailValidation(email.value) === true) {
    emailerror.style.display = "none";
  } else {
    emailerror.style.display = "block";
  }
  if (address.value.trim().length > 24) {
    addresserror.style.display = "none";
  } else {
    addresserror.style.display = "block";
  }
  if (name && textarea && email && address) {
    console.log("its done");
  }
}
form.addEventListener("submit", formValidation);

function emailValidation(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}
