// Assignment Code
// var values = "!#$%&()*+-./:;<=>?@^_`~abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
// Create individual variables with a set type of characters
var special = "!#$%&()*+-./:;<=>?@^_`~";
var lower = "abcdefghijklmnopqrstuvwxyz";
var upper= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";


var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // create variable values to store/add each value given by the promts
var values = "";
//Ask for user input for password length between 8 - 128 range
var range = prompt ("Select the password length between 8 and 128 characters.");
// if statment - to confirm the length is inside the parameters set by the exercise if not then start writePassword function again.
if (range < 8 || range > 128) {
  alert ("Please choose a password length between 8 and 128 chracters.");
  writePassword ();
// if length is within range apply an encouragin message.
} else if (range >= 8 && range <= 128) {
  alert ("You have chosen a password within range!");

}

var specialCharacters = confirm ("Do you want to include special characters?");
var lowerCharacters = confirm ("Do you want to include lower case characters?");
var upperCharacters = confirm ("Do you want to include upper case characters?");
var numbersCharacters = confirm ("Do you want to include numbers?");

//if statement for each type of character to concatenate values/string inside values var.
if (specialCharacters == true){
  values = values + special;
  console.log (values);

} 

if (lowerCharacters == true) {
  values = values + lower;
  console.log (values);

} 

if (upperCharacters == true) {
  values = values + upper;
  console.log (values);

} 

if (numbersCharacters == true) {
  values = values + numbers;
  console.log (values);
} 

//if no special caracters then alert user and stop the function writePassword.
if (values.length == "") {
  alert ("Please select at least one character");
  return;
} 

console.log (values)

var password = "";

for (var i=0; i < range; i ++)
password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));

//var password = generatePassword(); //omitted this line of code.
var passwordText = document.querySelector("#password");
passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);