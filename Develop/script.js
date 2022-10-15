// Assignment Code
// var values = "!#$%&()*+-./:;<=>?@^_`~abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

var special = "!#$%&()*+-./:;<=>?@^_`~";
var lower = "abcdefghijklmnopqrstuvwxyz";
var upper= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
//var values ="";

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
var values = "";
//Ask for user input for password length between 8 - 128 range
var range = prompt ("Select the length of the password between 8 and 128");

if (range < 8 || range > 128) {
  alert ("Please choose a password length between 8 and 128");
  writePassword ();

} else if (range >= 8 && range <= 128) {
  alert ("You have chosen a password within range.");

}

var specialCharacters = confirm ("Do you want to include special characters?");
var lowerCharacters = confirm ("Do you want to include lower case characters?");
var upperCharacters = confirm ("Do you want to include upper case characters?");
var numbersCharacters = confirm ("Do you want to include numbers?");


if (specialCharacters == true){
  values = values + special;
  console.log (values);

} //else console.log (values);

if (lowerCharacters == true) {
  values = values + lower;
  //console.log (values);

} //else console.log (values);

if (upperCharacters == true) {
  values = values + upper;
  //console.log (values);

} //else console.log (values);

if (numbersCharacters == true) {
  values = values + numbers;
  //console.log (values);
} //else console.log (values);

if (values.length == "") {
  alert ("Please select at least one character");
  return;
} 

console.log (values)

var password = "";

for (var i=0; i < range; i ++)
password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));

//var password = generatePassword();
var passwordText = document.querySelector("#password");
passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);