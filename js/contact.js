const nameError = document.querySelector(".nameError");
const emailError = document.querySelector(".emailError");
const subjectError = document.querySelector(".subjectError");
const explainError = document.querySelector(".explainError");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const subject = document.querySelector("#subject");
const explainSubject = document.querySelector("#explainSubject");
const buttonForm = document.querySelector(".form-btn");
const form = document.querySelector(".contact-form");
const successMessage = document.querySelector(".succesful-message");

function contactForm() {
  let validForm = true;
  if (Length(name.value, 5) === true) {
    nameError.style.display = "none";
  } else {
    nameError.style.display = "block";
    validForm = false;
  }
  if (emailValue(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
    validForm = false;
  }
  if (Length(subject.value, 15) === true) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "block";
    validForm = false;
  }
  if (Length(explainSubject.value, 25) === true) {
    explainError.style.display = "none";
  } else {
    explainError.style.display = "block";
    validForm = false;
  }
  return validForm;
}

form.addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();
  const checkedOff = contactForm();
  if (checkedOff === true) {
    successMessage.innerHTML += `<p>Your form has been sent</p>`;
  } else {
    return false;
  }
  form.reset();
}

function Length(value, len) {
  if (value.length >= len) {
    return true;
  } else {
    return false;
  }
}

function emailValue(email) {
  const regEx = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
  const pattern = regEx.test(email);
  return pattern;
}
