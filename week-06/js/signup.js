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



function validateName(){
  if (nameInput.value == "" || nameInput.value == null) {
    errorMessage[0] = "Name is required";
    return false
  }
  if (nameInput.value.length < 3) {
    errorMessage[0] = "More than 3 letters required";
    return false;
  }
  return true
}

function validateSurname(){
  if (surnameInput.value == "" || surnameInput.value == null) {
    errorMessage[1] = "Surname is required";
    return false;
  }
  if (surnameInput.value.length < 3) {
    errorMessage[1] = "More than 3 letters required";
    return false;
  }
  return true;
}

function validateId() {
  if (idInput.value == "" || idInput.value == null) {
    errorMessage[2] = "ID required";
  }
  if (idInput.value.length < 7) {
    errorMessage[2] = "More than 7 numbers required";
  }
  var containLetters = false;
  for(let i = 0; i < idInput.value.length; i++) {
    if (!Number(idInput.value[i])) {
      containLetters = true;
    }
  }
  if (containLetters) {
    errorMessage[2] = "This is not a number"
  }
  return true
  }

function validateBirthdate() {
  if (birthdateInput.value == "" || birthdateInput.value == null) {
    errorMessage[3] = "Date required";
    return false;
  }
  return true
}

function validatePhoneNumber () {
  if (phoneNumberInput.value == "" || phoneNumberInput.value == null) {
    errorMessage[4] = "Phone Number required";
    return false;
  }
  if (phoneNumberInput.value.length !== 10) {
    errorMessage[4] = "It must contain 10 numbers";
}
var containLetters = false;
for(let i = 0; i < phoneNumberInput.value.length; i++) {
  if (!Number(phoneNumberInput.value[i])) {
    containLetters = true;
  }
}
if (containLetters) {
  errorMessage[4] = "This is not a number"
}
return true
}

function validateAdress () {
  if (adressInput.value == "" || adressInput.value == null) {
    errorMessage[5] = "Adress required";
    return false;
  }
  if ()
}

function validateLocation () {
  if (locationInput.value == "" || locationInput.value == null){
    errorMessage[6] = "Location required";
    return false;
  }
  if (locationInput.value.length < 3) {
    errorMessage[6] = "More than 3 characters required";
    return false
  }
  return true;
}


nameInput.addEventListener("blur", validateName);
surnameInput.addEventListener("blur", validateSurname);
idInput.addEventListener("blur", validateId);
birthdateInput.addEventListener("blur", validateBirthdate);
phoneNumberInput.addEventListener ("blur", validatePhoneNumber);
adressInput.addEventListener ("blur",validateAdress);
locationInput.addEventListener("blur", validateLocation);





// submitButton.addEventListener("click", e=>{
//     e.preventDefault()
//     let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     if (nameU.value.length < 3 ){
//     alert("The name must contain more than 3 characters")
//     }else {
//       nameU.style.border= "2px solid green";
//     }
//     if (lName.value.length < 3){
//     alert("The last name must contain more than 3 characters")
//     }else{
//         lName.style.border= "2px solid green";
//     }
//     if (!regexEmail.test(email.value)){
//       alert("The email is not valid")
//     }else{
//       email.style.border= "2px solid green";
//     }
//     if(password.value.length < 8) {
//       alert("The password must contain at least 8 characters, letters and numbers")
//     }else {
//       password.style.border="2px solid green";
//     }
//     }
// )