// Assignment Code
let generateBtn = document.querySelector("#generate");
  console.log(generateBtn)

let password = ""
function generatePassword(){
  let passwordLength = prompt("How many characters do you want your password to have?")
  console.log(passwordLength)
  if (passwordLength < 8 || passwordLength > 128 || isNaN (passwordLength)){
    alert("Your password does not meet the criteria.")
    generatePassword()

  } else{
    let upperCaseConfirm = confirm("Do you want an uppercase in your password?")
  }
  return 123
}
// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");


  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


