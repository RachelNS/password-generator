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

  //Ask if they want lowercase letters
  var lowerCase = confirm("Would you like lowercase letters in your password?")
  //TODO: If yes, retrieve lowercase letters

  // Ask if they want uppercase letters
  var upperCase = confirm("Would you like uppercase letters in your password?")
  // TODO: If yes, retrieve uppercase letters

  //Ask if they want numbers
  var confirmNum = confirm("Would you like numbers in your password?")
  // TODO: If yes, retrieve numbers

  // Ask if they want special characters
  var specialChar = confirm("Would you like special characters in your password?")
  // TODO: If yes, retrieve special characters


