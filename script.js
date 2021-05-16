

// Assignment Code
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var spe = ["!", "@", "#", "$", "%", "^", "&", "*"];

var generateBtn = document.querySelector("#generate");


function alphaLo() {
  var lowNum = Math.floor (Math.random() * lower.length); 
  return (lower[lowNum]);
}
function alphaUp() {
  var lowNum2 = Math.floor(Math.random() * upper.length);
  return (upper[lowNum2]);
}
function alphaNum() {
  var lowNum3 = Math.floor(Math.random() * num.length);
  return (num[lowNum3]);
}
function alphaSpe() {
  var lowNum4 = Math.floor(Math.random() * spe.length);
return (spe[lowNum4]);
}


// Write password to the #password input



/* function passphrase() {
  for (var i = 0; i < alphaLo.length ;i++){}
  
  
} */
/* WHEN I click the button to generate a password X
    -series of prompts for password criteria X
          -length of the password X
              -at least 8 characters and no more than 128 characters X
          -character types to include in the password
              -confirm lowercase,
              -prompt  uppercase, 
              -prompt numeric
              -prompt special characters
          - input should be validated AND at least one character type should be selected
          - all prompts are answered
              -a password is generated that matches the selected criteria
 */


//define function  below
//local ver**
//Instructor JS files in lessons 7, 9, 11, 13, and 15. Plus the solved mini project 28.


function generatePassword() {

  var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var spe = ["!", "@", "#", "$", "%", "^", "&", "*"];

  let len = prompt('Pick a length of password between 8-128'); // '50'

  var passwordLength = parseInt(len) // 50

  if(passwordLength < 8 || passwordLength > 128){
    alert(' a number between 8 - 128 please!');
    generatePassword();
  }
  if(passwordLength > 8 || passwordLength < 128){
      (confirm(passwordLength + " characters will be the length of your password"));

  }
  if(confirm("Do you want Upper Case letters?")) {
    function alphaUp() {
      var upper = Math.floor(Math.random() * upper.length);
      return (upper[lowNum2]);
    }
  };
  if(confirm("Do you want lower case letters?")) {
    function alphaLo() {
      var lower = Math.floor (Math.random() * lower.length); 
      return (lower[lowNum]);
    }
  };
  if(confirm("Do you want numbers?")) {
    function alphaNum() {
      var num = Math.floor(Math.random() * num.length);
      return (num[lowNum3]);
    }
  };
  if(confirm("Do you special characters?")) {
    function alphaSpe() {
      var spe = Math.floor(Math.random() * spe.length);
    return (spe[lowNum4]);
    }
    
  };
  //var lower = confirm("Do you want Lower Case letters?");
  //var upper = confirm("Do you want Upper Case letters?");
  //var num = confirm("Do you want numbers?");
  //var special = confirm("Do you want special characters?");


  for (i= 0; i<passwordLength; i++) {
    console.log();
  }

}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);












// set min of 8 for thid password, choose any of these functions that give you a random output that gives 8< 



//for(var i=0, n = lower.length; i < length; ++i) {
  //retval += lower.charAt(Math.floor(Math.random() * n));
//}
//return retVal;



//Thing on found on the web -- example
//function generatePassword() {
  //var length = 8,
     // charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
     // retVal = "";
  //for (var i = 0, n = charset.length; i < length; ++i) {
     // retVal += charset.charAt(Math.floor(Math.random() * n));
  //}
//  return retVal;
//}