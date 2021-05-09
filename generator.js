// Assignment code here
I have no idea what I am doing...

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var length = 8,
  var generatePassword = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
  retVal = "";

for (var i = 0, n = charset.length; i < length; ++i) {
  retVal += charset.charAt(Math.floor(Math.random() * n));
}
return retVal;
}

  passwordText.value = password;

console.log (writePassword[i]) 
for (var i=0; i < writePassword.length;i++)
i < writePassword.length