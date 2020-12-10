// Assignment Code
var generateBtn = document.querySelector("#generate");

// Creates an array of numbers
var numArr = ("0123456789").split("")

// Creates an array of lowercase letters
var lowerCaseArr = ("abcdefghijklmnopqrstuvwxyz").split("");

// Creates an array of uppercase letters
var upperCaseArr = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ").split("");

//Creates an array of special characters
var specialCharArr = ("~`!@#$%^&*()_-+={}[]<>,.?/").split("")

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

function generatePassword() {
  // Creates empty array to hold possible characters for password based on user responses
  var charArr = [];
  // Creates empty string to hold the password
  var password = "";
  
  //Ask how many characters in password (must be between 8 and 128)
  var numCharacters = prompt("How many characters should your password have? Choose a number between 8 and 128.")
  // TODO: If the number is too low, tell them it's too low. If the number is too high, tell them it's too high.

  
    //Ask if they want numbers
    if (confirm("Would you like numbers in your password?")) {
      // Push numbers into empty array
      Array.prototype.push.apply(charArr, numArr)
      console.log(charArr)
    }

    //Ask if they want lowercase letters
    if (confirm("Would you like lowercase letters in your password?")) {
      //Push lowercase letters into empty array
      Array.prototype.push.apply(charArr, lowerCaseArr)
      console.log(charArr)
    }

    // Ask if they want uppercase letters
    if (confirm("Would you like uppercase letters in your password?")) {
    // Push uppercase letters into empty array
    Array.prototype.push.apply(charArr, upperCaseArr);
    console.log(charArr);
    }

    // Ask if they want special characters
    if (confirm("Would you like special characters in your password")) {
    // Push special characters into empty array
    Array.prototype.push.apply(charArr, specialCharArr);
    console.log(charArr);
    }



    // Run this loop as many times as chracters the person wants in their passwrod
    for (var i = 0; i < numCharacters; i++) {
        var passwordIndex = Math.floor(Math.random() * charArr.length);
        password += charArr[passwordIndex];
        console.log(password)

    }
  
    
  
  
}

