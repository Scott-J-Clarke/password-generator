// Assignment code here
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const symbols = ["@", "#", "$", "%", "&", "*"];
const characterCodes = Array.from(Array(26)).map((_, i) => i + 97);
const lowercaseLetters = characterCodes.map(code => String.fromCharCode(code));
const uppercaseLetters = lowercaseLetters.map(letter => letter.toUpperCase());

console.log(uppercaseLetters);


// alert("Your password must be between 8 and 128 characters. How many characters do you want your password to be?");

// alert("Your password must have at least one of the following:");

// alert("Uppercase");

// alert("Lowercase");

// alert("Numbers");

// alert("Symbols");

// alert("You did not choose at least one of uppercase, lowercase, numbers, or symbols!")

// alert("Your password is: ")

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
