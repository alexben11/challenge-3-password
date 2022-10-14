// Assignment Code
var specialCharacters = [" !#$%&()*+-./:;<=>?@^_`~"];
var lowerCharacters = ["abcdefghijklmnopqrstuvwxyz"];
var upperCharacters= ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var numbers = [0,1,2,3,4,5,6,7,8,9];

// var totalPasswordLength = [];
// var totalCharacters = [];
// var password = [];

var generateBtn = document.querySelector("#generate");

function writePassword() {
  
    totalPasswordLength = prompt ("Select the length of the password between 8 and 128 characters.");

    //console.log (totalPasswordLength)

    if (totalPasswordLength < 8 || totalPasswordLength > 128) {
      alert ("Please choose a password length between 8 and 128");
      writePassword ();
   
    } else if (totalPasswordLength >= 8 && totalPasswordLength <= 128) {
      alert ("You have chosen a password within range.");
      
    }



    var special = confirm ("Do you want to include special characters?");
    if (special) {
      totalCharacters = totalCharacters + specialCharacters;
    
    }
    var lower = confirm ("Do you want to include lower case characters?");
    if (lower) {
      totalCharacters = totalCharacters + lowerCharacters;
    }

    var upper = confirm ("Do you want to include upper case characters?");
    if (upper) {
      totalCharacters = totalCharacters + upperCharacters;
    }

    var numbers = confirm ("Do you want to include numbers?");
    if (numbers) {
      totalCharacters = totalCharacters + numbers;
      // return totalCharacters
      
    }
     

      //create the password by puting together totalCharacters and total password length.
      for (var i = 0; i <totalPasswordLength; i++){
        var randomNumber = Math.floor (Math.random() * totalCharacters.length)
        password += totalCharacters [randomNumber];

      }
      
      
      // password = total password legth in size
      // using total character array
      //randomly pick a number to represent an item in the array
      //stay within the password length

      // password = totalCharacters [randomNumber];
      // console.log (password)

      // password = (totalCharacters [randomNumber + i])
      // return password;
      // console.log (password)
 }

    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// // Notes 

// RANDOM NUMBER GENERATOR
// math.floor(12.384858) This will give you the integer = 12
// math.random ()  Gives you a random number from 0 - 0.99
// Put them together:
// Use number to multiply. 10 gives you 9 random numbers
// console.log(Math.floor(Math.random() *10)
// (Math.floor(Math.random(0.9) *10)
// (Math.floor (9))

// function getRandomNumber (max) {
//     return Math.flooor(Math.random() * (max+1))
//     call it by saying
//     console.log (getRandomNumber (2 or 3 or 7 or the maximum numbers you want maybe assign to index in array))
