var generateBtn = document.querySelector("#generate");

// Creates four arrays for lower case, upper case, numeric, and special characters.
var lowercaseLetters = [...Array(26)].map((_, i) => String.fromCharCode(i + 97));
var uppercaseLetters = [...Array(26)].map((_, i) => String.fromCharCode(i + 65));
var numericChar = [...Array(10)].map((_, i) => i);
var specialChar = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split("");
specialChar.push('"');

function generatePassword() {

  // Variables to track the parameters.
  var passwordLength = 0;
  var lowercaseAllowed = false;
  var uppercaseAllowed = false;
  var numericAllowed = false;
  var specialAllowed = false;

  // A variable to store the password and an array for all characters that are to be allowed in the password.
  var password = "";
  var allowedChars = [];

  // Control variable for the loops.
  var validCriteria = false;

  // Loop for determining the password length, if invalid input is entering it asks the user again.
  while (!validCriteria) {
    passwordLength = window.prompt("Please enter the desired password length, from 8 to 128.")
    if (passwordLength >= 8 && passwordLength <= 128) {
      validCriteria = true;
    } else {
      window.alert("Invalid criteria, please try again.")
    }
  }

  validCriteria = false;

  // Loop for determining which types of characters are allowed in the password.
  while (!validCriteria) {
    lowercaseAllowed = window.confirm("Allow lowercase letters?")
    uppercaseAllowed = window.confirm("Allow uppercase letters?")
    numericAllowed = window.confirm("Allow numeric characters?")
    specialAllowed = window.confirm("Allow special characters?")

    // One of the parameters must be allowed to exit the loop.
    if (lowercaseAllowed || uppercaseAllowed || numericAllowed || specialAllowed) {
      validCriteria = true;
    } else {
      window.alert("Invalid criteria, please try again.")
    }
  }

  // Appends the selected character types to the final array.
  if (lowercaseAllowed){
    allowedChars.push(...lowercaseLetters)  
  }

  if (uppercaseAllowed){
    allowedChars.push(...uppercaseLetters)  
  }

  if (numericAllowed){
    allowedChars.push(...numericChar)  
  }

  if (specialAllowed){
    allowedChars.push(...specialChar)  
  }

  // Adds characters to the password string one at a time, randomly selected from the allowed characters
  // array.
  for(var i = 0; i < passwordLength; i++){
    var newChar = allowedChars[Math.floor(Math.random() * allowedChars.length)]
    password = password + newChar;
  }

  // Return the final password string.
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
