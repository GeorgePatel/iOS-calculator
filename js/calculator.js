let runningTotal = 0;
let buffer = "0"; // waiting for user input and its a String bc it comes in as a String
let previousOperator = null;
const screen = document.querySelector('.screen'); // this is our screen that's getting updated for each button hit

document
  .querySelector('.calc-buttons')
  .addEventListener("click", function (event) { // have to put event there
    buttonClick(event.target.innerText); // you want the innerText of the HTML. Usually, you'd want the target.value if you're
                                          // reading from an input
})

function buttonClick(value) {
  if (isNaN(parseInt(value))) { // NaN stands for not a number. if its not a number, its a symbol
    handleSymbol(value);
  } else {
    handleNumber(value);
  }
  rerender(); // call when some button is clicked everytime then buffer is changed
}

function handleNumber(value) {
  if (buffer === "0") { // if we're starting from zero, we want the first number to be whatever button was clicked on
    buffer = value;
  } else {
    buffer += value; // if something hits 7, then hits 5, u want the 5 to go to the end of it
  }
}

function handleSymbol(value) {
  switch (value) {
    case 'C' :
      buffer = "0";
      runningTotal = 0;
      previousOperator = null;
      break;
    case "=" :
      if (previousOperator === null) { // if nothing has been previously assigned
        return;
      }
      flushOperation(parseInt(buffer));
      previousOperator = null;
      buffer = "" + runningTotal; // convert runningTotal to a String by doing concatenation. you want to keep the same type, not switch back and forth
      runningTotal = 0;
      break;
    case "←" :
      if (buffer.length === 1) {
        buffer = "0";
      } else {
        buffer = buffer.substring(0, buffer.length - 1); // remove the last number in the string
      }
      break;
    default:
      handleMath(value);
      break;
  }
}

function handleMath(value) {
  const intBuffer = parseInt(buffer); // number representation of whats on the screen
  if (runningTotal === 0) { // if someone does a math operation and runningTotal is zero
    runningTotal = intBuffer; // we need to reassign the runningTotal to the buffer value
  } else { // otherwise, do some math to get the new value
    flushOperation(intBuffer);
  }

  previousOperator = value; // we know if we're in handleMath() that previousOperation is some sort of operator

  buffer = "0"; // we're ready for the next number to come in
}

function flushOperation (intBuffer) {
  if (previousOperator === "+") {
    runningTotal += intBuffer;
  } else if (previousOperator === "-") {
    runningTotal -= intBuffer;
  } else if (previousOperator === "×") {
    runningTotal *= intBuffer;
  } else {
    runningTotal /= intBuffer;
  }
}

function rerender() {
  screen.innerText = buffer;
}

// const zero = document.querySelector('.zero');
// const one = document.querySelector('.one');
// const two = document.querySelector('.two');
// const three = document.querySelector('.three');
// const four = document.querySelector('.four');
// const five = document.querySelector('.five');
// const six = document.querySelector('.six');
// const seven = document.querySelector('.seven');
// const eight = document.querySelector('.eight');
// const nine = document.querySelector('.nine');
// const addition = document.querySelector('.addition');
// const subtraction = document.querySelector('.subtract');
// const division = document.querySelector('.divide');
// const multiplication = document.querySelector('.multiply');
// const equals = document.querySelector('.equals');
// const clear = document.querySelector('.clear');
// const backspace = document.querySelector('.backspace');
// let screen = document.querySelector('.screen');
//
// let currentNumber = "";
// let previousNumber = "";
// let operation = "";
// let result = "";
//
// zero.addEventListener('click', function () {
//     if (currentNumber === "") {
//       currentNumber = "0";
//       screen.textContent = currentNumber;
//     } else {
//       currentNumber += "0";
//       screen.textContent = currentNumber;
//     }
// });
//
// one.addEventListener('click', function () {
//   if (currentNumber === "") {
//     currentNumber = "1";
//     screen.textContent =  currentNumber;
//   } else {
//     currentNumber += "1";
//     screen.textContent = currentNumber;
//   }
// });
//
// two.addEventListener('click', function () {
//   if (currentNumber === "") {
//     currentNumber = "2";
//     screen.textContent = currentNumber;
//   } else {
//     currentNumber += "2";
//     screen.textContent = currentNumber;
//   }
// });
//
// three.addEventListener('click', function () {
//   if (currentNumber === "") {
//     currentNumber = "3";
//     screen.textContent = currentNumber;
//   } else {
//     currentNumber += "3";
//     screen.textContent = currentNumber;
//   }
// });
//
// four.addEventListener('click', function () {
//   if (currentNumber === "") {
//     currentNumber = "4";
//     screen.textContent = currentNumber;
//   } else {
//     currentNumber += "4";
//     screen.textContent = currentNumber;
//   }
// });
//
// five.addEventListener('click', function () {
//   if (currentNumber === "") {
//     currentNumber = "5";
//     screen.textContent = currentNumber;
//   } else {
//     currentNumber += "5";
//     screen.textContent = currentNumber;
//   }
// });
//
// six.addEventListener('click', function () {
//   if (currentNumber === "") {
//     currentNumber = "6";
//     screen.textContent = currentNumber;
//   } else {
//     currentNumber += "6";
//     screen.textContent = currentNumber;
//   }
// });
//
// seven.addEventListener('click', function () {
//   if (currentNumber === "") {
//     currentNumber = "7";
//     screen.textContent = currentNumber;
//   } else {
//     currentNumber += "7";
//     screen.textContent = currentNumber;
//   }
// });
//
// eight.addEventListener('click', function () {
//   if (currentNumber === "") {
//     currentNumber = "8";
//     screen.textContent = currentNumber;
//   } else {
//     currentNumber += "8";
//     screen.textContent = currentNumber;
//   }
// });
//
// nine.addEventListener('click', function () {
//   if (currentNumber === "") {
//     currentNumber = "9";
//     screen.textContent = currentNumber;
//   } else {
//     currentNumber += "9";
//     screen.textContent = currentNumber;
//   }
// });
//
// clear.addEventListener('click', function () {
//     currentNumber = "";
//     previousNumber = "";
//     screen.textContent = "0";
// });
//
// backspace.addEventListener('click', function () {
//     if (currentNumber.length === 1) {
//       screen.textContent = "0";
//     } else {
//       currentNumber = currentNumber.slice(0, currentNumber.length - 1);
//       screen.textContent = currentNumber;
//     }
// });
//
// division.addEventListener('click', function () {
//     previousNumber = currentNumber;
//     currentNumber = "";
//     operation = "division";
// });
//
// multiplication.addEventListener('click', function () {
//   previousNumber =  currentNumber;
//   currentNumber = "";
//   operation = "multiplication";
// });
//
// subtraction.addEventListener('click', function () {
//   if (currentNumber === "") {
//     currentNumber += "-";
//   } else {
//     previousNumber = currentNumber;
//     currentNumber = "";
//     operation = "subtraction";
//   }
// });
//
// addition.addEventListener('click', function () {
//   previousNumber = currentNumber;
//   currentNumber = "";
//   operation = "addition";
// });
//
// equals.addEventListener('click', function () {
//   if (previousNumber === "") {
//     return screen.textContent = currentNumber;
//   } else if (currentNumber === "") {
//     return screen.textContent = previousNumber;
//   } else if (operation === "addition") {
//     result = parseInt(previousNumber) + parseInt(currentNumber);
//     currentNumber = result;
//     return screen.textContent = result;
//   } else if (operation === "subtraction") {
//     result = parseInt(previousNumber) - parseInt(currentNumber);
//     currentNumber = result;
//     return screen.textContent = result;
//   } else if (operation === "multiplication") {
//     result = parseInt(previousNumber) * parseInt(currentNumber);
//     currentNumber = result;
//     return screen.textContent = result;
//   } else {
//     if (parseInt(currentNumber) === 0) {
//       return screen.textContent = "Infinity";
//     } else {
//       result = parseInt(previousNumber) / parseInt(currentNumber);
//       currentNumber = result;
//       return screen.textContent = result;
//     }
//   }
// })
//
//
//


