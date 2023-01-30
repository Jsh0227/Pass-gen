// Assignment Code
let generateBtn = document.querySelector("#generate");
  console.log(generateBtn)
const upperCase=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
const lowerCase= ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
const number=[1,2,3,4,5,6,7,8,9,0]
const specialChars=['"','!','@','$','%','^','&','*','#','"']



let passwordGenerated = ""
function generatePassword(){
  //stores all the characters and symbols
  let bowl =[]
  let passwordLength = prompt("How many characters do you want your password to have?")
  console.log(passwordLength)

  while (passwordLength < 8 || passwordLength > 15 || isNaN (passwordLength)){
    alert("Your password does not meet the criteria. Please enter a number between 8 and 15")
    passwordLength = prompt("How many characters do you want your password to have?")
  }
  let confirmUpperCase = confirm("Would you like an uppercase letter in your password?")
  console.log(confirmUpperCase)
  if(confirmUpperCase === true){
    //Saves the uppercase letter into the bowl.
    bowl = bowl.concat(upperCase)
    console.log(bowl)
  }
    
   let confirmLowerCase = confirm("Would you like a lowercase letter in your password?")
   if (confirmLowerCase === true){

    //Saves a lowercase letter into the bowl.
    bowl = bowl.concat(lowerCase)
    console.log(bowl)
   }
  let confirmNumber = confirm("Would you like a number in your password?")
  if (confirmNumber === true){

    //Saves a number into the bowl.
    bowl = bowl.concat(number)
    console.log(bowl)
  }

  let confirmSpecialChars = confirm("Would you like a number in your password?")
  if (confirmSpecialChars === true){

    //Saves a special character in the bowl.
    bowl = bowl.concat(specialChars)
    console.log(bowl)
  }
  for(var i = 0; i < passwordLength; i++){
   passwordGenerated = passwordGenerated + (bowl[Math.floor(Math.random() * bowl.length)])
  }
  return passwordGenerated;
}

//generatePassword()
// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
  passwordGenerated = '';
}

generateBtn.addEventListener("click", writePassword)


