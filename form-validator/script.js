const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

//Show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

// Email RegEx
isValidEmail = (input) => {
  const emailReg = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if(emailReg.test(input.value.trim())){
    showSuccess(input)

  } else {
    showError(input);
  }
}

checkRequired = (inputArr) => {
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      console.log(input.input);
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

checkLength = (input, min, max) => {
  if (input.value.length < min) {
      showError(input, `${getFieldName(input)} must be at least ${min} characters`);
  } else if (input.value.length > max) {
    showError(input, `${getFieldName(input)} must be less than ${max} characters`);
  }
}

checkPasswordsMatch = (input1, input2) => {
  if(input1.value !== input2.value) {
    showError(input2, 'Passwords do not match')
  }
}

getFieldName = (input) => {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event Listeners
form.addEventListener("submit", function (e) {
  e.preventDefault();
  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  checkLength(password2, 6, 25);
  checkEmail(email)
  checkPasswordsMatch(password, password2)
});
