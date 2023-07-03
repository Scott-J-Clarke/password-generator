// Connects code to HTML "Generate Password" red button.
document.getElementById("generate").addEventListener("click", generatePassword); 

// Code block that asks user to choose the length of their password and what it will contain.
function generatePassword() {
  let passwordLength = prompt(
    "Your password must be between 8 and 128 characters.\nHow long do you want it to be?"
    );
    if (passwordLength >= 8 && passwordLength <= 128) {

      let hasNumbers = confirm(
        "Click 'Okay' if you want numbers in your password.\nClick 'Cancel' if you do not."
        );
      let hasSymbols = confirm(
        "Click 'Okay' if you want symbols in your password.\nClick 'Cancel' if you do not."
        );
      let hasLowercaseLetters = confirm(
        "Click 'Okay' if you want lowercase letters in your password.\nClick 'Cancel' if you do not."
        );
      let hasUppercaseLetters = confirm(
        "Click 'Okay' if you want uppercase letters in your password.\nClick 'Cancel' if you do not."
        );
      
      // Empty array to put numbers, symbols, lowercaseLetters, and uppercaseLetters into.
      let availableCharacters = [];
      
      // Arrays of numbers, letters, lowercaseLetters, and uppercaseLetters that will be put into availableCharacters.
      const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
      const symbols = ["@", "#", "$", "%", "&", "*"];
      const lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
      const uppercaseLetters = lowercaseLetters.map(lowercaseLetter => lowercaseLetter.toUpperCase());
  
      // Series of if statements that help determine if numbers, letters, lowercaseLetters, and uppercaseLetters will be added to availableCharacters.
      if (hasNumbers) {
        availableCharacters = availableCharacters.concat(numbers)
      };

      if (hasSymbols) {
        availableCharacters = availableCharacters.concat(symbols)
      };

      if (hasLowercaseLetters) {
        availableCharacters = availableCharacters.concat(lowercaseLetters)
      };

      if (hasUppercaseLetters) {
        availableCharacters = availableCharacters.concat(uppercaseLetters)
      };
  
      // Empty password string.
      let password = "";

      // If statement to check that user has selected at least one of numbers, letters, lowercaseLetters, or uppercaseLetters.
      if (availableCharacters.length === 0) {
        alert("You need to select at least one of numbers, symbols, lowercase letters, or uppercase letters.\nPlease refresh your browser to restart the process."
        );
        // Empty string that shows up in "Generate Password" HTML box.
        return "";
      }

      // Code block that creates the random password for the user.
      for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * availableCharacters.length);
        password += availableCharacters[randomIndex];
      };
      // Code that sends the random password to the "Generate Password" HTML box.
      var passwordText = document.querySelector("#password");
      passwordText.value = password;
    }
    // Alert in case user chose a password less than 8 characters or greater than 128 characters.
    else (alert(
    "Your requested password length is less than 8 characters or more than 128 characters.\nPlease refresh your browser to restart the process."
  ));
}  