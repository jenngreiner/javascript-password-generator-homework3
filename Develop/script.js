// Array of special characters for password
var specialCharacter = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "+",
  ",",
  "-",
  ".",
  "/",
  ";",
  ":",
  "=",
  "<",
  ">",
  "?",
  "[",
  "]",
  "_",
  "'",
  "{",
  "}",
  "~",
  "`",
]
// Array of uppercase letters for password
var uppercase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
]
// Array of lowercase letters for password
var lowercase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
]
// Array of numbers for password
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]


function getPasswordOptions() {
  // User provides desired length between 8-128.
  var passwordLength = prompt("Select a password length between 8-128 characters.");

  // Check user entry is a number
  if (isNaN(passwordLength)) {
    alert("Password length must be a number.")
    return;
  }
  // Check password is atleast 8 characters long.
  if (passwordLength < 8) {
    alert("Password must be more 8 characters long.")
    return;
  };

  // Check password is no more than 128 characters long.
  if (passwordLength > 128) {
    alert("Password must be no more than 128 characters long.")
    return;
  };

  // Variables store boolean for each password criteria
  var hasSpecialCharacters = confirm("Would you like to include special characters?");
  var hasNumbers = confirm("Would you like to include numbers?");
  var hasUpperCasedCharacters = confirm("Would you like to include uppercase letters?")
  var hasLowerCasedCharacters = confirm("Would you like to include lowercase letters?")

  // Return error if no criteria are selected 
  if (
    (hasSpecialCharacters === false) &&
    (hasNumbers === false) &&
    (hasUpperCasedCharacters === false) &&
    (hasLowerCasedCharacters === false)) {
    alert("Please select criteria in order to generate a password.")
    return;
  };
};

getPasswordOptions()

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


// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// AS AN employee with access to sensitive data
// I WANT to randomly generate a password that meets certain criteria
// SO THAT I can create a strong password that provides greater security
// ```

// ## Acceptance Criteria


// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page