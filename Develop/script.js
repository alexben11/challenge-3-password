// Assignment Code

var generateBtn = document.querySelector("#generate");
var numbers = [0,1,2,3,4,5,6,7,8,9];
var specialCharacters = [" ", "!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "^", "_", "`", "~"];
var lowerCharacters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCharacters= ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];


// Write password to the #password input
  function writePassword() {
    var password = generatePassword(){
      passwordLength = window.prompt ("How many characters would you like your password to contain")
    };
    var passwordText = document.querySelector("#password");

  
    passwordText.value = password;

  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



//   function createArray (max) {
//   return Length = passwordLength Math.floor(math.random() * passwordLenght)
// }

//  = window.prompt ("How many characters would you like your password to contain");  array
//  = window.prompt ("Click ok to confirm including special characters"); boolean
//  = window.prompt ("Click ok to confirm including numeric characters"); boolean
//  = window.prompt ("Click ok to confirm including lower characters"); boolean
//  = window.prompt ("Click ok to confirm including uppercase characters"); boolean

// if (special character) {
// } else if (numeric character){
// } else if (lower character){
// } else if (upper case) {
// } else (false)



// PROMPT - Window Object
// to pop up window for user input
// var userInput=window.propt("text");
// example console.log (userInput)

// Show message
// window.alert ("you chose" +userInput)


// USE AN ARRAY TO HAVE THE OPTIONS GIVEN TO THE USER

// // Notes 

// RANDOM NUMBER GENERATOR
// (Math.floor(Math.random() *10)

// function getRandomNumber (max) {
//     return Math.flooor(Math.random() * (max+1))
// }

// loop 
// for (var i=0;i<10;i++){
// }