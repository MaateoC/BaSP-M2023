var form = document.getElementById("form");
var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("password");
var loginButton = document.getElementById("continue");

//TODO:!crear array de errores dentro de validate email
function validateEmail(e) {
  //TODO:!adentro de esta function voy a usar un arreglo de errores en la posicion 0
  var email = emailInput.value;
  if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
    emailInput.style.border = "1px solid red";
    e.preventDefault();
    return false;
  }
  emailInput.style.border = "2px solid green";
  return true;
}
function validatePassword(e) {
  //TODO:!adentro de esta function voy a usar un arreglo de errores en la posicion 1
  var password = passwordInput.value;
  var containsLetter = false;
  var containsNumbers = false;

  for (var i = 0; i < password.length; i++) {
    if (isNaN(password.charAt(i))) {
      containsLetter = true;
    } else {
      containsNumbers = true;
    }
  }

  if (password.length < 8 || !(containsLetter && containsNumbers)) {
    passwordInput.style.border = "1px solid red";
    e.preventDefault();
    return false;
  }
  passwordInput.style.border = "2px solid green";
  return true;
}

function validateForm(e) {
  //TODO:!acá chequeo si el arreglo tiene errores
  var validEmail = validateEmail(e);
  var validPassword = validatePassword(e);
  if (!validEmail) {
    alert("The email must contain a valid format");
  }
  if (!validPassword) {
    alert("Password must have at least one character");
  }
  if (validEmail && validPassword) {
    alert(
      "Email: " + emailInput.value + "\nContraseña: " + passwordInput.value
    );
  }
}

emailInput.addEventListener("blur", validateEmail);
passwordInput.addEventListener("blur", validatePassword);
loginButton.addEventListener("click", validateForm);
