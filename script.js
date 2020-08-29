// Assignment Code
var generateBtn = document.querySelector("#generate");
lowerCase = [];
upperCase = [];
symbols = [];
numbers = [];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Generat Password funtion
function generatePassword() {
  // Introducing my local variable
  var numberOfChar;
  var includeLower;
  var includeUpper;
  var includeNumbers;
  var includeSymbols;
  passwordArray = [];
  superarray = [];

  // Number of charaters prompt and validation using console log for debugging purposes
  numberOfChar = prompt("Pick a desired number of characters between 8-128, for your Password ?!");
  console.log(numberOfChar);
    if (numberOfChar >= 8 && numberOfChar <= 128) {
      console.log("sakoo");
    } else {
      alert(
        "'You entered an invalid number of characters, please hit Ok, then click the Generate Password Button again and provide a valid entry"
      );
      return "Click Generate Password Button Again";
    }

// geting the rest of the input elements
    includeUpper = confirm("Do you need your password to include Uppercase Letters?");
    console.log(includeUpper);
    includeLower = confirm("Do you need your password to include Lowercase Letters?");
    console.log(includeLower);
    includeSymbols = confirm("Do you need your password to include Symbols?");
    console.log(includeSymbols);
    includeNumbers = confirm("Do you need your password to include Numbers?");
    console.log(includeNumbers);
// validate the negative scenario
      if (
        includeLower === false &&
        includeNumbers === false &&
        includeSymbols === false &&
        includeUpper === false
      ) {
        alert("At least one charater's category need to be selected to generate a Password");
        return "Your password must have at least one charater's category, please click the Generate Password Button again and provide a valid entry.";
      } else {
        console.log("sakoo");
      }
// creating my superarray pool of elements
  function arrayCreation(start, finish) {
    const array = [];
    for (let q = start; q <= finish; q++) {
      array.push(q);
        }
        return array;
      }
      lowerCase = arrayCreation(97, 122);
      console.log(lowerCase);
      upperCase = arrayCreation(65, 90);
      console.log(upperCase);
      numbers = arrayCreation(48, 57);
      console.log(numbers);
      symbols = arrayCreation(33, 47).concat(arrayCreation(58, 64)).concat(arrayCreation(91, 96)).concat(arrayCreation(123, 126));
      console.log(symbols);

      if (includeLower) {
        superarray = superarray.concat(lowerCase);
      } else {
        console.log("lowerCasenotincluded");
      }
      if (includeUpper) {
        superarray = superarray.concat(upperCase);
      } else {
        console.log("UpperCasenotincluded");
      }
      if (includeNumbers) {
        superarray = superarray.concat(numbers);
      } else {
        console.log("Numbersnotincluded");
      }
      if (includeSymbols) {
        superarray = superarray.concat(symbols);
      } else {
        console.log("Symbolsnotincluded");
      }

      console.log("The final SuperArray" + superarray);

  //shuffle the superarray for more randomness and also to try our best to avoid getting sequencec permutation
  for (let o = superarray.length - 1; o > 0; o--) {
    var r = Math.floor(Math.random() * o);
    var temp = superarray[o];
    superarray[o] = superarray[r];
    superarray[r] = temp;
  }
  console.log("The shuffled Superarray : " + superarray);

  // looping the desired number of characters and generate a randon supperarray index number
  for (t = 1; t <= numberOfChar; t++) {
    var y = Math.floor(Math.random() * superarray.length);
    console.log(y);
    passwordArray.push(String.fromCharCode(superarray[y]));
  }
  console.log("This is the password array : " + passwordArray);
  
// returning the password as a String not an array
  return passwordArray.join("");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
