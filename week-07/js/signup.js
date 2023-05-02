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
var pSignUpName = document.getElementById("name-sign-up");
var pSignUpSurname = document.getElementById("surname-sign-up");
var pSignUpId = document.getElementById("id-sign-up");
var pSignUpBirthdate = document.getElementById("birthdate-sign-up");
var pSignUpPhone = document.getElementById("phone-sign-up");
var pSignUpAddress = document.getElementById("address-sign-up");
var pSignUpLocation = document.getElementById("location-sign-up");
var pSignUpZipCode = document.getElementById("zipCode-sign-up");
var pSignUpEmail = document.getElementById("email-sign-up");
var pSignUpPassword = document.getElementById("password-sign-up");
var pSignUpRepeatPassword = document.getElementById("repeat-password-sign-up");
var errorMessage = [];

function validateName(e) {
  if (e.target.value == "" || e.target.value == null) {
    errorMessage.push("Name is required");
    pSignUpName.textContent = "Name is required";
    nameInput.classList.remove("input-correct");
    nameInput.classList.add("input-error");
    pSignUpName.style.display = "block";
    return false;
  } else if (e.target.value.length < 4) {
    errorMessage.push("More than 3 letters required");
    pSignUpName.textContent = "More than 3 letters required";
    nameInput.classList.remove("input-correct");
    nameInput.classList.add("input-error");
    pSignUpName.style.display = "block";
  } else {
    nameInput.classList.remove("input-error");
    nameInput.classList.add("input-correct");
    pSignUpName.style.display = "none";
    errorMessage.splice(0, errorMessage.length);
    return true;
  }
}

function validateSurname(e) {
  if (e.target.value == "" || e.target.value == null) {
    errorMessage.push("Surname is required");
    pSignUpSurname.textContent = "Surname is required";
    surnameInput.classList.remove("input-correct");
    surnameInput.classList.add("input-error");
    pSignUpSurname.style.display = "block";
    return false;
  } else if (e.target.value.length < 4) {
    errorMessage.push("More than 3 letters required");
    pSignUpSurname.textContent = "More than 3 letters required";
    surnameInput.classList.remove("input-correct");
    surnameInput.classList.add("input-error");
    pSignUpSurname.style.display = "block";
  } else {
    surnameInput.classList.remove("input-error");
    surnameInput.classList.add("input-correct");
    pSignUpSurname.style.display = "none";
    errorMessage.splice(0, errorMessage.length);
    return true;
  }
}

function validateId(e) {
  if (e.target.value == "" || e.target.value == null) {
    errorMessage.push("ID required");
    pSignUpId.textContent = "ID required";
    idInput.classList.remove("input-correct");
    idInput.classList.add("input-error");
    pSignUpId.style.display = "block";
    return false;
  }
  if (e.target.value.length < 7) {
    errorMessage.push("More than 7 numbers required");
    pSignUpId.textContent = "More than 7 numbers required";
    idInput.classList.add("input-error");
    pSignUpId.style.display = "block";
    return false;
  }
  var containLetters = false;
  for (let i = 0; i < e.target.value.length; i++) {
    if (isNaN(Number(e.target.value[i]))) {
      containLetters = true;
      return false;
    }
  }
  if (containLetters) {
    errorMessage.push("This is not a number");
    pSignUpId.textContent = "This is not a number";
    idInput.classList.add("input-error");
    pSignUpId.style.display = "block";
    return false;
  }
  idInput.classList.remove("input-error");
  idInput.classList.add("input-correct");
  pSignUpId.style.display = "none";
  errorMessage.splice(0, errorMessage.length);
  return true;
}

function validateBirthdate(e) {
  if (e.target.value == "" || e.target.value == null) {
    errorMessage.push("Date required");
    pSignUpBirthdate.textContent = "Date required";
    birthdateInput.classList.add("input-error");
    pSignUpBirthdate.style.display = "block";
    return false;
  } else {
    birthdateInput.classList.remove("input-error");
    birthdateInput.classList.add("input-correct");
    pSignUpBirthdate.style.display = "none";
    errorMessage.splice(0, errorMessage.length);
  }
  return true;
}

function validatePhoneNumber(e) {
  if (e.target.value == "" || e.target.value == null) {
    errorMessage.push("Phone Number required");
    pSignUpPhone.textContent = "Phone Number required";
    phoneNumberInput.classList.add("input-error");
    pSignUpPhone.style.display = "block";
    return false;
  }
  if (e.target.value.length < 10) {
    errorMessage.push("It must contain 10 numbers");
    pSignUpPhone.textContent = "It must contain 10 numbers";
    phoneNumberInput.classList.add("input-error");
    pSignUpPhone.style.display = "block";
  }
  var containLetters = false;
  for (let i = 0; i < e.target.value.length; i++) {
    if (!Number(e.target.value[i])) {
      containLetters = true;
    }
  }
  if (containLetters) {
    errorMessage.push("This is not a number");
    pSignUpPhone.textContent = "This is not a number";
    phoneNumberInput.classList.add("input-error");
    pSignUpPhone.style.display = "block";
  }
  if (e.target.value.length == 10) {
    phoneNumberInput.classList.remove("input-error");
    phoneNumberInput.classList.add("input-correct");
    pSignUpPhone.style.display = "none";
    errorMessage.splice(0, errorMessage.length);
  }
  return true;
}

function validateAdress(e) {
  var indexOfSpace = e.target.value.indexOf(" ");
  var isLetter = false;
  var isNumber = true;

  if (e.target.value == "" || e.target.value == null) {
    errorMessage.push("Adress required");
    pSignUpAddress.textContent = "Adress required";
    adressInput.classList.add("input-error");
    pSignUpAddress.style.display = "block";
    return false;
  } else if (e.target.value.length < 5) {
    errorMessage.push("Adress must contain at least 5 characters");
    pSignUpAddress.textContent = "Adress must contain at least 5 characters";
    adressInput.classList.add("input-error");
    pSignUpAddress.style.display = "block";
    return false;
  }
  if (isNaN(Number(e.target.value[indexOfSpace - 1]))) {
    isLetter = true;
  }
  if (isNaN(Number(e.target.value[indexOfSpace + 1]))) {
    isNumber = false;
  }
  if (!isLetter || !isNumber || indexOfSpace == -1) {
    errorMessage.push("Space must be between a letter and a number");
    pSignUpAddress.textContent = "Space must be between a letter and a number";
    adressInput.classList.add("input-error");
    pSignUpAddress.style.display = "block";
    return false;
  } else {
    adressInput.classList.remove("input-error");
    adressInput.classList.add("input-correct");
    pSignUpAddress.style.display = "none";
    errorMessage.splice(0, errorMessage.length);
    return true;
  }
}

function validateLocation(e) {
  if (e.target.value == "" || e.target.value == null) {
    errorMessage.push("Location required");
    pSignUpLocation.textContent = "Location required";
    locationInput.classList.add("input-error");
    pSignUpLocation.style.display = "block";
    return false;
  }
  if (e.target.value.length < 4) {
    errorMessage.push("More than 3 characters required");
    pSignUpLocation.textContent = "More than 3 characters required";
    locationInput.classList.add("input-error");
    pSignUpLocation.style.display = "block";
    return false;
  }
  var containLetters = false;
  for (let i = 0; i < e.target.value.length; i++) {
    if (!Number(e.target.value[i])) {
      containLetters = true;
    }
  }
  if (!containLetters) {
    errorMessage.push("Must contain at least one letter");
    pSignUpLocation.textContent = "Must contain at least one letter";
    locationInput.classList.add("input-error");
    pSignUpLocation.style.display = "block";
    return false;
  } else {
    locationInput.classList.remove("input-error");
    locationInput.classList.add("input-correct");
    pSignUpLocation.style.display = "none";
    errorMessage.splice(0, errorMessage.length);
    return true;
  }
}

function validateZipCode(e) {
  if (e.target.value == "" || e.target.value == null) {
    errorMessage.push("Zip Code required");
    pSignUpZipCode.textContent = "Zip Code required";
    zipCodeInput.classList.add("input-error");
    pSignUpZipCode.style.display = "block";
    return false;
  }
  if (e.target.value.length < 4 || e.target.value.length > 5) {
    errorMessage.push(
      "It must contain more than 4 numbers and less than 5 numbers"
    );
    pSignUpZipCode.textContent =
      "It must contain more than 4 numbers and less than 5 numbers";
    zipCodeInput.classList.add("input-error");
    pSignUpZipCode.style.display = "block";
    return false;
  }
  var containLetters = false;
  for (let i = 0; i < e.target.value.length; i++) {
    if (isNaN(Number(e.target.value[i]))) {
      containLetters = true;
    }
  }
  if (containLetters) {
    errorMessage.push("It only have to contain numbers");
    pSignUpZipCode.textContent = "It only have to contain numbers";
    zipCodeInput.classList.add("input-error");
    pSignUpZipCode.style.display = "block";
    return false;
  } else {
    zipCodeInput.classList.remove("input-error");
    zipCodeInput.classList.add("input-correct");
    pSignUpZipCode.style.display = "none";
    errorMessage.splice(0, errorMessage.length);
    return true;
  }
}

function validateEmail(e) {
  var validateEmail = /^[^@]+@[^@]+.[a-zA-Z]{2,}$/;
  if (e.target.value == "" || e.target.value == null) {
    errorMessage.push("Email is required");
    pSignUpEmail.textContent = "Email is required";
    emailInput.classList.add("input-error");
    pSignUpEmail.style.display = "block";
    return false;
  }
  if (!validateEmail.test(emailInput.value)) {
    errorMessage.push("Invalid email");
    pSignUpEmail.textContent = "Invalid email";
    emailInput.classList.add("input-error");
    pSignUpEmail.style.display = "block";
  } else {
    emailInput.classList.remove("input-error");
    emailInput.classList.add("input-correct");
    pSignUpEmail.style.display = "none";
    errorMessage.splice(0, errorMessage.length);
  }
  return true;
}

function validatePassword(e) {
  if (e.target.value == "" || e.target.value == null) {
    errorMessage.push("Password is required");
    pSignUpPassword.textContent = "Password is required";
    passwordInput.classList.add("input-error");
    pSignUpPassword.style.display = "block";
    return false;
  }
  if (e.target.value.length < 8 || e.target.value.length > 40) {
    errorMessage.push("Password must contain between 8 and 40 characters");
    pSignUpPassword.textContent =
      "Password must contain between 8 and 40 characters";
    passwordInput.classList.add("input-error");
    pSignUpPassword.style.display = "block";
    return false;
  }
  var containsNumber = false;
  for (let i = 0; i < e.target.value.length; i++) {
    if (Number(e.target.value[i])) {
      containsNumber = true;
    }
  }
  if (!containsNumber) {
    errorMessage.push("Password must contain at least one number");
    pSignUpPassword.textContent = "Password must contain at least one number";
    passwordInput.classList.add("input-error");
    pSignUpPassword.style.display = "block";
    return false;
  }
  var containLetters = false;
  for (let i = 0; i < e.target.value.length; i++) {
    if (!Number(e.target.value[i])) {
      containLetters = true;
    }
  }
  if (!containLetters) {
    errorMessage.push("Password must contain at least one letter");
    pSignUpPassword.textContent = "Password must contain at least one letter";
    passwordInput.classList.add("input-error");
    pSignUpPassword.style.display = "block";
    return false;
  } else {
    passwordInput.classList.remove("input-error");
    passwordInput.classList.add("input-correct");
    pSignUpPassword.style.display = "none";
    errorMessage.splice(0, errorMessage.length);
    return true;
  }
}

function validateRepeatPassword(e) {
  if (e.target.value == "" || e.target.value == null) {
    errorMessage.push("Password is required");
    pSignUpRepeatPassword.textContent = "Password is required";
    repeatPasswordInput.classList.add("input-error");
    pSignUpRepeatPassword.style.display = "block";
    return false;
  } else if (passwordInput.value !== repeatPasswordInput.value) {
    errorMessage.push("The passwords must match");
    pSignUpRepeatPassword.textContent = "The passwords must match";
    repeatPasswordInput.classList.add("input-error");
    pSignUpRepeatPassword.style.display = "block";
    return false;
  } else {
    repeatPasswordInput.classList.remove("input-error");
    repeatPasswordInput.classList.add("input-correct");
    pSignUpRepeatPassword.style.display = "none";
    errorMessage.splice(0, errorMessage.length);
    return true;
  }
}

var formData = new FormData(formInput);
function showFormAlert() {
  if (errorMessage.length == 0) {
    alert(
      "Name:" +
        nameInput.value +
        "\n" +
        "Surname:" +
        surnameInput.value +
        "\n" +
        "Id:" +
        idInput.value +
        "\n" +
        "Birthdate:" +
        birthdateInput.value +
        "\n" +
        "Phone Number:" +
        phoneNumberInput.value +
        "\n" +
        "Adress:" +
        adressInput.value +
        "\n" +
        "Location:" +
        locationInput.value +
        "\n" +
        "Zip Code:" +
        zipCodeInput.value +
        "\n" +
        "Email:" +
        emailInput.value +
        "\n" +
        "Password:" +
        passwordInput.value +
        "\n" +
        "Repeat password:" +
        repeatPasswordInput.value +
        "\n"
    );
    nameInput.classList.remove("input-correct");
    surnameInput.classList.remove("input-correct");
    idInput.classList.remove("input-correct");
    birthdateInput.classList.remove("input-correct");
    phoneNumberInput.classList.remove("input-correct");
    adressInput.classList.remove("input-correct");
    zipCodeInput.classList.remove("input-correct");
    emailInput.classList.remove("input-correct");
    passwordInput.classList.remove("input-correct");
    repeatPasswordInput.classList.remove("input-correct");
    const arrayDate = birthdateInput.value.split("-");
    const string = `${arrayDate[1]}/${arrayDate[2]}/${arrayDate[0]}`;
    let url =
      "https://api-rest-server.vercel.app/signup" +
      "?name=" +
      nameInput.value +
      "&lastName=" +
      surnameInput.value +
      "&dni=" +
      idInput.value +
      "&dob=" +
      string +
      "&phone=" +
      phoneNumberInput.value +
      "&address=" +
      adressInput.value +
      "&city=" +
      locationInput.value +
      "&zip=" +
      zipCodeInput.value +
      "&email=" +
      emailInput.value +
      "&password=" +
      passwordInput.value;
    fetch(`${url}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.success) {
          localStorage.setItem("name", nameInput.value);
          localStorage.setItem("lastName", surnameInput.value);
          localStorage.setItem("dni", idInput.value);
          localStorage.setItem("dob", birthdateInput.value);
          localStorage.setItem("phone", phoneNumberInput.value);
          localStorage.setItem("address", adressInput.value);
          localStorage.setItem("city", locationInput.value);
          localStorage.setItem("zip", zipCodeInput.value);
          localStorage.setItem("email", emailInput.value);
          localStorage.setItem("password", passwordInput.value);
        } else {
          throw new Error(data.msg);
        }
        alert(data.msg);
        console.log(data);
      })
      .catch((error) => alert(error));
  } else {
    var errorAlert = "";
    for (var i = 0; i < errorMessage.length; i++) {
      errorAlert += errorMessage[i] + "\n";
    }
    alert(errorAlert);
  }
}

window.addEventListener("load", function () {
  nameInput.value = localStorage.getItem("name");
  surnameInput.value = localStorage.getItem("lastName");
  idInput.value = localStorage.getItem("dni");
  birthdateInput.value = localStorage.getItem("dob");
  phoneNumberInput.value = localStorage.getItem("phone");
  adressInput.value = localStorage.getItem("address");
  locationInput.value = localStorage.getItem("city");
  zipCodeInput.value = localStorage.getItem("zip");
  emailInput.value = localStorage.getItem("email");
  passwordInput.value = localStorage.getItem("password");
  repeatPasswordInput.value = localStorage.getItem("password");
});

nameInput.addEventListener("blur", validateName);
nameInput.addEventListener("focus", function () {
  nameInput.classList.remove("input-error");
  nameInput.classList.remove("input-correct");
});
surnameInput.addEventListener("blur", validateSurname);
surnameInput.addEventListener("focus", function () {
  surnameInput.classList.remove("input-error");
  surnameInput.classList.remove("input-correct");
});
idInput.addEventListener("blur", validateId);
idInput.addEventListener("focus", function () {
  idInput.classList.remove("input-error");
  idInput.classList.remove("input-correct");
});
birthdateInput.addEventListener("blur", validateBirthdate);
birthdateInput.addEventListener("focus", function () {
  birthdateInput.classList.remove("input-error");
  birthdateInput.classList.remove("input-correct");
});
phoneNumberInput.addEventListener("blur", validatePhoneNumber);
phoneNumberInput.addEventListener("focus", function () {
  phoneNumberInput.classList.remove("input-error");
  phoneNumberInput.classList.remove("input-correct");
});
adressInput.addEventListener("blur", validateAdress);
adressInput.addEventListener("focus", function () {
  adressInput.classList.remove("input-error");
  adressInput.classList.remove("input-correct");
});
locationInput.addEventListener("blur", validateLocation);
locationInput.addEventListener("focus", function () {
  locationInput.classList.remove("input-error");
  locationInput.classList.remove("input-correct");
});
zipCodeInput.addEventListener("blur", validateZipCode);
zipCodeInput.addEventListener("focus", function () {
  zipCodeInput.classList.remove("input-error");
  zipCodeInput.classList.remove("input-correct");
});
emailInput.addEventListener("blur", validateEmail);
emailInput.addEventListener("focus", function () {
  emailInput.classList.remove("input-error");
  emailInput.classList.remove("input-correct");
});
passwordInput.addEventListener("blur", validatePassword);
passwordInput.addEventListener("focus", function () {
  passwordInput.classList.remove("input-error");
  passwordInput.classList.remove("input-correct");
});
repeatPasswordInput.addEventListener("blur", validateRepeatPassword);
repeatPasswordInput.addEventListener("focus", function () {
  repeatPasswordInput.classList.remove("input-error");
  repeatPasswordInput.classList.remove("input-correct");
});
submitButtonInput.addEventListener("click", showFormAlert);

formInput.addEventListener("submit", (event) => {
  event.preventDefault();
});
