// Assignment Code
var generateBtn = document.querySelector("#generate");

// Defines function to write password in output field
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password")
  passwordText.value = password;
}

// Creates an array of numbers
var numArr = ("0123456789").split("")

// Creates an array of lowercase letters
var lowerCaseArr = ("abcdefghijklmnopqrstuvwxyz").split("");

// Creates an array of uppercase letters
var upperCaseArr = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ").split("");

//Creates an array of special characters
var specialCharArr = ("~`!@#$%^&*()_-+={}[]<>,.?/").split("")

  // Creates empty array to hold possible characters for password based on user responses
  var charArr = [];
  // Creates empty string to hold the password
  var password = "";

// Defines function to generate password
function generatePassword() { 

    //Ask if they want numbers
    var numbers = confirm("Would you like numbers in your password?")

    //Ask if they want lowercase letters
    var lowerLetters = confirm("Would you like lowercase letters in your password?")


    // Ask if they want uppercase letters
    var upperLetters = confirm("Would you like uppercase letters in your password?")


    // Ask if they want special characters
    var specialCharacters = confirm("Would you like special characters in your password?")


    //Ask how many characters in password (must be between 8 and 128)
    var numCharacters = prompt("How many characters should your password have? Choose a number between 8 and 128.")

    // If they want numbers, push numbers into the empty array
    if (numbers) {
      Array.prototype.push.apply(charArr, numArr)
    }

    // If they want lowercase letters, push lowercase letters into empty array
    if (lowerLetters) {
      Array.prototype.push.apply(charArr, lowerCaseArr)
    }

    // If they want upperccase letters, push uppercase letters into empty array
    if (upperLetters) {
      Array.prototype.push.apply(charArr, upperCaseArr);
      }
    
      // If they want special characters, push special characters into empty array
    if (specialCharacters) {
      Array.prototype.push.apply(charArr, specialCharArr);
        }  

    // Run this loop as many times as chracters the person wants in their passwrod
    for (var i = 0; i < numCharacters; i++) {
        var passwordIndex = Math.floor(Math.random() * charArr.length);
        password += charArr[passwordIndex];

    } 

    // If user selects "no" for all character types, return an error messge
    if (!lowerLetters && !upperLetters && !specialCharacters && !numbers) {
      alert("Plese select at least one character type.")
    }

    // If user enters a number smaller than 8 or larger than 128, return an error message
    if (numCharacters <8 || numCharacters >128) {
      alert("Please enter a number between 8 and 128.")
    }

    //Returns password value
    return password; 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


