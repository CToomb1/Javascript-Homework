var generateBtn = document.querySelector("#generate");


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  copyBtn.removeAttribute("disabled");
  copyBtn.focus();
}

var numbers="0123456789";
var lowerLetters="abcdefghijklmnopqrstuvwxyz";
var upperLetters="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialChar="!@#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
var newPassword=[];

var passwordLength=prompt("How many characters would you like in your password? Please choose a number from 8-128");

if (passwordLength >= 8 && passwordLength <= 128) {
  alert("Thank you");
}
else {
  alert("Sorry! Try again!");
}
console.log(passwordLength);

var userSpecialChar=confirm("Would you like special characters?");

if (userSpecialChar === true) {
  alert("Adding Special Characters to your password.");
}
else {
  alert("No special characters will be added to your password");
}
console.log(userSpecialChar);

var userLowerCase=confirm("Would you like lowercase letters in your password?");

if (userLowerCase === true) {
  alert("Your password will have lowercase letters.");
}
else {
  alert("Your password will have no lowercase letters.");
}
console.log(userLowerCase);

var userUpperCase=confirm("Would you like uppercase letters in your password?");

if (userUpperCase === true) {
  alert("Your password will have uppercase letters.");
}
else {
  alert("Your password will have no uppercase letters.");
}
console.log(userUpperCase);

function copyToClipboard() {
}


generateBtn.addEventListener("click", writePassword);
