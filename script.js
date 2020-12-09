// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// TODO: Define lowercase letters
// TODO: Define uppercase letters
// TODO: Define random whole numbers 1-10
// TODO: Define special characters


// Take user input
  //Ask how many characters in password (must be between 8 and 128)
  var numCharacters = prompt("How many characters should your password have?")
  // TODO: If the number is too low, tell them it's too low. If the number is too high, tell them it's too high.

  //Ask if they want numbers
  var confirmNum = confirm("Would you like numbers in your password?")

  //Ask if they want lowercase letters
  var lowerCase = confirm("Would you like lowercase letters in your password?")
  

  // Ask if they want uppercase letters
  var upperCase = confirm("Would you like uppercase letters in your password?")
  
  
  // Ask if they want special characters
  var specialChar = confirm("Would you like special characters in your password?")
  

// Run this function as many times as chracters the person wants in their passwrod
for (i=0; i<= numCharacters; i++) {
  // If yes to numbers, retrieve numbers
  if (confirmNum) {
    var num = Math.floor(Math.random() * 10);
    writePassword(num);
    }

  //If yes to lowercase letters, retrieve lowercase letters
  else if (lowerCase) {
  var alphabet = ("abcdefghijklmnopqrstuvwxyz");
  var randomLower = [Math.floor(Math.random() * alphabet.length)];
  writePassword(randomLower);
  }

  // If yes to uppercase letters, retrieve uppercase letters
  else if (upperCase) {
    var alpha2 = alphabet.toUpperCase;
    var randomUpper = [Math.floor(Math.random () *alpha2.length)];
    writePassword(randomUpper);
  }

  //If yes to special characters, retrieve special characters
  else if (specialChar) {
    var characters = ("~`!@#$%^&*()-_+={}[]|\/><,.")
    var randomChar = [Math.floor(Math.random () *characters.length)];
    writePassword(randomChar);
  }

}


