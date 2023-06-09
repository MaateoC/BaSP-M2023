var formInput = document.querySelector("form");
var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("password");
var loginButton = document.getElementById("continue");
var errorMessage = [];

function validateEmail (e) {
  var validateEmail = /^[^@]+@[^@]+.[a-zA-Z]{2,}$/;
  if (e.target.value == "" || e.target.value == null) {
    errorMessage.push("Email is required");
    emailInput.classList.add("input-error");
    return false;
  } if (!validateEmail.test(emailInput.value)) {
    errorMessage.push("Invalid email");
        emailInput.classList.add("input-error");
  }else {
    emailInput.classList.remove("input-error");
    emailInput.classList.add("input-correct");
  }
  return true
}

function validatePassword (e) {
  if (e.target.value == "" || e.target.value == null) {
    errorMessage.push("Password is required");
    passwordInput.classList.add("input-error");
    return false;
  } if (e.target.value.length < 8 || e.target.value.length > 40){
    errorMessage.push("Password must contain between 8 and 40 characters");
    passwordInput.classList.add("input-error");
    return false; 
  }
  var containsNumber = false;
for(let i = 0; i < e.target.value.length; i++) {
  if (Number(e.target.value[i])) {
    containsNumber = true;
  }
}
  if (!containsNumber) {
    errorMessage.push("Password must contain at least one number");
    passwordInput.classList.add("input-error");
    return false;
  }
  var containLetters = false;
for(let i = 0; i < e.target.value.length; i++) {
  if (!Number(e.target.value[i])) {
    containLetters = true;
  }
}
  if (!containLetters) {
    errorMessage.push("Password must contain at least one letter");
    passwordInput.classList.add("input-error");
    return false;
  } else {
    passwordInput.classList.remove("input-error");
    passwordInput.classList.add("input-correct");
    return true
  }
}

function showFormAlert () {
  if (errorMessage.length == 0) {
    alert("Email:" + emailInput.value + "\n" + "Password:" + passwordInput.value)
    emailInput.value = "";
    passwordInput.value = "";
    passwordInput.classList.remove("input-correct");
    emailInput.classList.remove("input-correct");
  } else {
    var errorAlert = "";
  for (var i=0; i<errorMessage.length; i++) {
    errorAlert += errorMessage[i] + "\n"
  }
  alert(errorAlert)
}
}

emailInput.addEventListener("blur", validateEmail);
emailInput.addEventListener("focus", function (){
  emailInput.classList.remove("input-error");
  emailInput.classList.remove("input-correct");
})
passwordInput.addEventListener("blur", validatePassword);
passwordInput.addEventListener("focus", function (){
  passwordInput.classList.remove("input-error");
  passwordInput.classList.remove("input-correct");
})
loginButton.addEventListener("click", showFormAlert);
