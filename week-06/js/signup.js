var nameInput = document.getElementById("name");
var surnameInput = document.getElementById("surname");
var idInput = document.getElementById("id");
var birthdateInput = document.getElementById("birthdate");
var phoneNumberInput = document.getElementById("phone-number");
var adressInput = document.getElementById("adress");
var locationInput = document.getElementById("location");
var zipCodeInput = document.getElementById("zip-code");
var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("password");
var formInput = document.querySelector("form");
var repeatPasswordInput = document.getElementById("repeat-password");
var submitButtonInput = document.getElementById("submit-button");
var errorMessage = [];


function validateName(e){
  if (e.target.value == "" || e.target.value == null) {
    errorMessage[0] = "Name is required";
    nameInput.classList.remove("input-correct")
    nameInput.classList.add("input-error");
    return false
  }
  else if (e.target.value.length < 4) {
    errorMessage[0] = "More than 3 letters required";
    nameInput.classList.remove("input-correct");
    nameInput.classList.add("input-error");
  } else {
  nameInput.classList.remove("input-error");
  nameInput.classList.add("input-correct");
  return true
  }
}

function validateSurname(e){
  if (e.target.value == "" || e.target.value == null) {
    errorMessage[1] = "Surname is required";
    surnameInput.classList.remove("input-correct")
    surnameInput.classList.add("input-error");
    return false;
  }
  else if (e.target.value.length < 4) {
    errorMessage[1] = "More than 3 letters required";
    surnameInput.classList.remove("input-correct");
    surnameInput.classList.add("input-error");
  } else {
    surnameInput.classList.remove("input-error");
    surnameInput.classList.add("input-correct");
  return true;
  }
}

function validateId(e) {
  if (e.target.value == "" || e.target.value == null) {
    errorMessage[2] = "ID required";
    idInput.classList.remove("input-correct");
    idInput.classList.add("input-error");
  }
  if (e.target.value.length < 7) {
    errorMessage[2] = "More than 7 numbers required";
    idInput.classList.add("input-error");
  }
  var containLetters = false;
  for(let i = 0; i < e.target.value.length; i++) {
    if (!Number(e.target.value[i])) {
      containLetters = true;
    }
  }
  if (containLetters) {
    errorMessage[2] = "This is not a number"
    idInput.classList.remove("input-error");
    idInput.classList.add("input-correct");
  }
  return true
  }

function validateBirthdate(e) {
  if (e.target.value == "" || e.target.value == null) {
    errorMessage[3] = "Date required";
    birthdateInput.classList.add("input-error");
    return false;
  } else {
    birthdateInput.classList.remove("input-error");
    birthdateInput.classList.add("input-correct");
  }
  return true
}

function validatePhoneNumber (e) {
  if (e.target.value == "" || e.target.value == null) {
    errorMessage[4] = "Phone Number required";
    phoneNumberInput.classList.add("input-error");
    return false;
  }
  if (e.target.value.length < 10) {
    errorMessage[4] = "It must contain 10 numbers";
    phoneNumberInput.classList.add("input-error");
}
var containLetters = false;
for(let i = 0; i < e.target.value.length; i++) {
  if (!Number(e.target.value[i])) {
    containLetters = true;
  }
}
if (containLetters) {
  errorMessage[4] = "This is not a number";
  phoneNumberInput.classList.add("input-error");
} if (e.target.value.length == 10) {
  phoneNumberInput.classList.remove("input-error");
  phoneNumberInput.classList.add("input-correct");
}
return true
  }

function validateAdress (e) {
  var indexOfSpace = e.target.value.indexOf(" ");
  var isLetter = false;
  var isNumber = false;

  if (e.target.value == "" || e.target.value == null) {
    errorMessage[5] = "Adress required";
    adressInput.classList.add("input-error");
    return false;
  }
  else if (e.target.value.lenght < 5) {
    errorMessage[5] = "Adress must contain at least 5 characters";
    adressInput.classList.add("input-error");
    return false
  }
  else if (!Number(e.target.value[indexOfSpace - 1])) {
    isLetter = true;
  }
  else if (Number(e.target.value[indexOfSpace + 1])) {
    isNumber = true;
  }
  else if (!isLetter || !isNumber || indexOfSpace == -1) {
    errorMessage[5] = "Blank space must be between a letter and a number";
    adressInput.classList.add("input-error");
    console.log(errorMessage[5]);
    return false;
  } else {
    adressInput.classList.remove("input-error");
    adressInput.classList.add("input-correct");
    return true;
  }
}

function validateLocation () {
  if (locationInput.value == "" || locationInput.value == null){
    errorMessage[6] = "Location required";
    return false;
  }
  if (locationInput.value.length < 4) {
    errorMessage[6] = "More than 3 characters required";
    return false
  }
  return true;
}

function validateZipCode (e) {
  if (e.target.value == "" || e.target.value == null) {
    errorMessage[7] = "Zip Code required";
    return false;
  }
  
}

function validateEmail (e) {
  var validateEmail = /^[^@]+@[^@]+.[a-zA-Z]{2,}$/;
  if (e.target.value == "" || e.target.value == null) {
    errorMessage[8] = "Email is required";
    emailInput.classList.add("input-error");
    return false;
  } if (!validateEmail.test(emailInput.value)) {
        errorMessage[8] = "Invalid email";
        emailInput.classList.add("input-error");
  }else {
    emailInput.classList.remove("input-error");
    emailInput.classList.add("input-correct");
  }
  return true
}

function validatePassword (e) {
  if (e.target.value == "" || e.target.value == null) {
    errorMessage[9] = "Password is required";
    passwordInput.classList.add("input-error");
    console.log(errorMessage[9]);
    return false;
  } if (e.target.value.length < 8 || e.target.value.length > 40){
    errorMessage[9] = "Password must contain between 8 and 40 characters";
    passwordInput.classList.add("input-error");
    console.log(errorMessage[9]);
    return false; 
  }
  var containsNumber = false;
  for (var i=0;i<e.target.value.lenght; i++) {
    var character = e.target.value.charAt(i);
    if(!isNaN(parseInt(character)) && isFinite(character)) {
      containsNumber = true;
      console.log(errorMessage[9]);
      break;
    }
  }
  if (!containsNumber) {
    errorMessage[9] = "Password must contain at least one number";
    passwordInput.classList.add("input-error");
    console.log(errorMessage[9]);
    return false;
  }
  var containsLetter = false;
  for (var i=0; i<e.target.value.lenght;i++) {
    var character = e.target.value.charAt(i);
    if ((character >='a' && character <= 'z') || (character >= 'A' && character <= 'Z')) {
      containsLetter=true;
      console.log(errorMessage[9]);
      break;
    }
  }
  if (!containsLetter) {
    errorMessage[9] = "Password must contain at least one letter";
    emailInput.classList.add("input-error");
    console.log(errorMessage[9]);
    return false;
  } else {
    emailInput.classList.remove("input-error");
    emailInput.classList.add("input-correct");
    return true
  }
}

function validateRepeatPassword (e) {

}

nameInput.addEventListener("blur", validateName);
surnameInput.addEventListener("blur", validateSurname);
idInput.addEventListener("blur", validateId);
birthdateInput.addEventListener("blur", validateBirthdate);
phoneNumberInput.addEventListener ("blur", validatePhoneNumber);
adressInput.addEventListener ("blur",validateAdress);
adressInput.addEventListener("focus", function (){
  adressInput.classList.remove("input-error");
})
locationInput.addEventListener("blur", validateLocation);
zipCodeInput.addEventListener("blur", validateZipCode);
emailInput.addEventListener("blur", validateEmail);
passwordInput.addEventListener("blur", validatePassword);
repeatPasswordInput.addEventListener("blur", validateRepeatPassword);