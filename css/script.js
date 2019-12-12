var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  copyBtn.removeAttribute("disabled");
  copyBtn.focus();
}
//Vars for characters used to make up generated password
var numbers = "0123456789";
var numberArr = numbers.split("");
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var lowerCaseArr = lowerCase.split("");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var upperCaseArr = upperCase.split("");
var special = "!@#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
var specialArr = special.split("");

var newPassword = [];

// Create Prompt for user to choose 8-128 characters for their password
function generatePassword() {
  var passwordLength = prompt("How many characters would you like in your password? Please choose a number from 8-128");

  if (passwordLength >= 8 && passwordLength <= 128) {
    alert("Thank you");
  }
  else {
    alert("Tsk Tsk! Try again!");
  } //need to make loop so person has to type correct amount
  console.log(passwordLength);

  //Create confirm for user to choose if they would like numbers
  var userNum = confirm("Would you like numbers in your password?");

  if (userNum === true) {
    alert("Your password will contain numbers.");
  }
  else {
    alert("Your password will not contain numbers.");
  }
  console.log(userNum);
  // Create Prompt for user to choose if they would like special characters

  var userSpecialChar = confirm("Would you like special characters?");

  if (userSpecialChar === true) {
    alert("Your password will contain special characters.");
  }
  else {
    alert("Your password will not contain special characters.");
  }
  console.log(userSpecialChar);

  // Create confirm for user to choose if they would like lowercase letters

  var userLowerCase = confirm("Would you like lowercase letters in your password?");

  if (userLowerCase === true) {
    alert("Your password will contain lowercase letters.");
  }
  else {
    alert("Your password will not contain lowercase letters.");
  }
  console.log(userLowerCase);

  var userUpperCase = confirm("Would you like uppercase letters in your password?");

  if (userUpperCase === true) {
    alert("Your password will contain uppercase letters.");
  }
  else {
    alert("Your password will not contain uppercase letters.");
  };
  console.log(userUpperCase);

  newPassword.push(numberArr, lowerCaseArr, upperCaseArr, specialArr);

  return newPassword.join('');
};


function copyToClipboard() {
}

generateBtn.addEventListener("click", writePassword);
