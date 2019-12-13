var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copy");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  copyBtn.removeAttribute("disabled");
  copyBtn.focus();
}

var numbers = "0123456789";
var numberArr = numbers.split("");
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var lowerCaseArr = lowerCase.split("");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var upperCaseArr = upperCase.split("");
var special = "!@#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
var specialArr = special.split("");

var newPassword = [];
var characterBankArr = [];

function generatePassword() {
  var passwordLength = prompt("How many characters would you like in your password? Please choose a number from 8-128");

  passWordLength = parseInt(passwordLength);
  if (passwordLength >= 8 && passwordLength <= 128) {
    alert("Thank you");
  }

  var userNum = confirm("Would you like numbers in your password?");

  if (userNum === true) {
    alert("Your password will contain numbers.");
    characterBankArr.push(numberArr);
  }
  else {
    alert("Your password will not contain numbers.");
  }

  var userSpecialChar = confirm("Would you like special characters?");

  if (userSpecialChar === true) {
    alert("Your password will contain special characters.");
    characterBankArr.push(specialArr);
  }
  else {
    alert("Your password will not contain special characters.");
  }

  var userLowerCase = confirm("Would you like lowercase letters in your password?");

  if (userLowerCase === true) {
    alert("Your password will contain lowercase letters.");
    characterBankArr.push(lowerCaseArr);
  }
  else {
    alert("Your password will not contain lowercase letters.");
  }

  var userUpperCase = confirm("Would you like uppercase letters in your password?");

  if (userUpperCase === true) {
    alert("Your password will contain uppercase letters.");
    characterBankArr.push(upperCaseArr);
  }
  else {
    alert("Your password will not contain uppercase letters.");
  };

  for (var i = 0; i < passwordLength; i++) {

    var characterTypeArr = characterBankArr[Math.floor(Math.random() * characterBankArr.length)];

    var charPicked = characterTypeArr[Math.floor(Math.random() * characterTypeArr.length)];
    newPassword.push(charPicked);
  }

  return newPassword.join('');
};

function copyToClipboard() {
  var copyText = document.querySelector("#password");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("Copied the text: " + copyText.value);
};

generateBtn.addEventListener("click", writePassword);

copyBtn.addEventListener("click", copyToClipboard);