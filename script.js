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
function generatePassword() {
  var numberOfChar;
  var includeLower;
  var includeUpper;
  var includeNumbers;
  var includeSymbols;
  passwordArray = [];
  superarray = [];

  numberOfChar = prompt("Pick a desired number of characters between 8-128");
  console.log(numberOfChar);
  if (numberOfChar >= 8 && numberOfChar <= 128) {
    console.log("sakoo");
  } else {
    alert(
      "'You entered an invalid number of characters, please refresh the page and provide a number between 8-128?"
    );
    return ("Click Generate Password Button Agian");
  }
  includeUpper = confirm(
    "Do you need your password to have Uppercase Letters?"
  );
  console.log(includeUpper);
  includeLower = confirm(
    "Do you need your password to have Lowercase Letters?"
  );
  console.log(includeLower);
  includeSymbols = confirm("Do you need your password to have Symbols?");
  console.log(includeSymbols);
  includeNumbers = confirm("Do you need your password to have Numbers?");
  console.log(includeNumbers);

  if (
    includeLower === false &&
    includeNumbers === false &&
    includeSymbols === false &&
    includeUpper === false
  ) {
    alert("At least one category need to be selected");
    return;
  } else {
    console.log("sakoo");
  }

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
  symbols = arrayCreation(33, 47)
    .concat(arrayCreation(58, 64))
    .concat(arrayCreation(91, 96))
    .concat(arrayCreation(123, 126));
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

  for (let o = superarray.length - 1; o > 0; o--) {
    var r = Math.floor(Math.random() * o);
    var temp = superarray[o];
    superarray[o] = superarray[r];
    superarray[r] = temp;
  }
  console.log("The shuffled Superarray : " + superarray);

  for (t = 1; t <= numberOfChar; t++) {
    var y = Math.floor(Math.random() * superarray.length);
    console.log(y);
    passwordArray.push(String.fromCharCode(superarray[y]));
  }
  console.log("This is the password array : " + passwordArray);

  var secert = passwordArray.join("");
  console.log(secert);
  return secert;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
