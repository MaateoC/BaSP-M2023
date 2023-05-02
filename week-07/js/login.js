var formInput = document.querySelector("form");
var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("password");
var loginButton = document.getElementById("continue");
var pLoginEmail = document.getElementById("email-login");
var pLoginPassword = document.getElementById("password-login");
var errorMessage = [];

function validateEmail(e) {
  var validateEmail = /^[^@]+@[^@]+.[a-zA-Z]{2,}$/;
  if (e.target.value == "" || e.target.value == null) {
    errorMessage.push("Email is required");
    pLoginEmail.textContent = "Email is required";
    emailInput.classList.add("input-error");
    pLoginEmail.style.display = "block";
    return false;
  }
  if (!validateEmail.test(emailInput.value)) {
    errorMessage.push("Invalid email");

    pLoginEmail.textContent = "Enter a valid email";
    emailInput.classList.add("input-error");
    pLoginEmail.style.display = "block";
  } else {
    pLoginEmail.style.display = "none";
    emailInput.classList.remove("input-error");
    emailInput.classList.add("input-correct");
    errorMessage.splice(0, errorMessage.length);
  }
  return true;
}

function validatePassword(e) {
  if (e.target.value == "" || e.target.value == null) {
    errorMessage.push("Password is required");
    pLoginPassword.textContent = "Password is required";
    passwordInput.classList.add("input-error");
    pLoginPassword.style.display = "block";
    return false;
  }
  if (e.target.value.length < 8 || e.target.value.length > 40) {
    errorMessage.push("Password must contain between 8 and 40 characters");
    pLoginPassword.textContent =
      "Password must contain between 8 and 40 characters";
    pLoginPassword.style.display = "block";
    passwordInput.classList.add("input-error");

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
    pLoginPassword.textContent = "Password must contain at least one number";
    passwordInput.classList.add("input-error");
    pLoginPassword.style.display = "block";
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
    pLoginPassword.textContent = "Password must contain at least one letter";
    passwordInput.classList.add("input-error");
    pLoginPassword.style.display = "block";
    return false;
  } else {
    passwordInput.classList.remove("input-error");
    pLoginPassword.textContent = "Password must contain at least one letter";
    passwordInput.classList.add("input-correct");
    pLoginPassword.style.display = "none";
    errorMessage.splice(0, errorMessage.length);
    return true;
  }
}

function showFormAlert() {
  if (errorMessage.length == 0) {
    passwordInput.classList.remove("input-correct");
    emailInput.classList.remove("input-correct");
    const url = "https://api-rest-server.vercel.app/login";

    var formData = new FormData(formInput);
    const queryParams = new URLSearchParams(formData).toString();

    fetch(`${url}?${queryParams}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.success == false) {
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
loginButton.addEventListener("click", showFormAlert);

formInput.addEventListener("submit", (event) => {
  event.preventDefault();
  showFormAlert();
});
