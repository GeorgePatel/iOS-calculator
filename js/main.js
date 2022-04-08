const zero = document.querySelector('.zero');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const addition = document.querySelector('.addition');
const subtraction = document.querySelector('.subtract');
const division = document.querySelector('.divide');
const multiplication = document.querySelector('.multiply');
const equals = document.querySelector('.equals');
const clear = document.querySelector('.clear');
const backspace = document.querySelector('.backspace');
let screen = document.querySelector('.screen');

let currentNumber = "";
let previousNumber = "";
let operation = "";
let result = "";

zero.addEventListener('click', function () {
    if (currentNumber === "") {
      currentNumber = "0";
      screen.textContent = currentNumber;
    } else {
      currentNumber += "0";
      screen.textContent = currentNumber;
    }
});

one.addEventListener('click', function () {
  if (currentNumber === "") {
    currentNumber = "1";
    screen.textContent =  currentNumber;
  } else {
    currentNumber += "1";
    screen.textContent = currentNumber;
  }
});

two.addEventListener('click', function () {
  if (currentNumber === "") {
    currentNumber = "2";
    screen.textContent = currentNumber;
  } else {
    currentNumber += "2";
    screen.textContent = currentNumber;
  }
});

three.addEventListener('click', function () {
  if (currentNumber === "") {
    currentNumber = "3";
    screen.textContent = currentNumber;
  } else {
    currentNumber += "3";
    screen.textContent = currentNumber;
  }
});

four.addEventListener('click', function () {
  if (currentNumber === "") {
    currentNumber = "4";
    screen.textContent = currentNumber;
  } else {
    currentNumber += "4";
    screen.textContent = currentNumber;
  }
});

five.addEventListener('click', function () {
  if (currentNumber === "") {
    currentNumber = "5";
    screen.textContent = currentNumber;
  } else {
    currentNumber += "5";
    screen.textContent = currentNumber;
  }
});

six.addEventListener('click', function () {
  if (currentNumber === "") {
    currentNumber = "6";
    screen.textContent = currentNumber;
  } else {
    currentNumber += "6";
    screen.textContent = currentNumber;
  }
});

seven.addEventListener('click', function () {
  if (currentNumber === "") {
    currentNumber = "7";
    screen.textContent = currentNumber;
  } else {
    currentNumber += "7";
    screen.textContent = currentNumber;
  }
});

eight.addEventListener('click', function () {
  if (currentNumber === "") {
    currentNumber = "8";
    screen.textContent = currentNumber;
  } else {
    currentNumber += "8";
    screen.textContent = currentNumber;
  }
});

nine.addEventListener('click', function () {
  if (currentNumber === "") {
    currentNumber = "9";
    screen.textContent = currentNumber;
  } else {
    currentNumber += "9";
    screen.textContent = currentNumber;
  }
});

clear.addEventListener('click', function () {
    currentNumber = "";
    previousNumber = "";
    screen.textContent = "0";
});

backspace.addEventListener('click', function () {
    if (currentNumber.length === 1) {
      screen.textContent = "0";
    } else {
      currentNumber = currentNumber.slice(0, currentNumber.length - 1);
      screen.textContent = currentNumber;
    }
});

division.addEventListener('click', function () {
    previousNumber = currentNumber;
    currentNumber = "";
    operation = "division";
});

multiplication.addEventListener('click', function () {
  previousNumber =  currentNumber;
  currentNumber = "";
  operation = "multiplication";
});

subtraction.addEventListener('click', function () {
  if (currentNumber === "") {
    currentNumber += "-";
  } else {
    previousNumber = currentNumber;
    currentNumber = "";
    operation = "subtraction";
  }
});

addition.addEventListener('click', function () {
  previousNumber = currentNumber;
  currentNumber = "";
  operation = "addition";
});

equals.addEventListener('click', function () {
  if (previousNumber === "") {
    return screen.textContent = currentNumber;
  } else if (currentNumber === "") {
    return screen.textContent = previousNumber;
  } else if (operation === "addition") {
    result = parseInt(previousNumber) + parseInt(currentNumber);
    currentNumber = result;
    return screen.textContent = result;
  } else if (operation === "subtraction") {
    result = parseInt(previousNumber) - parseInt(currentNumber);
    currentNumber = result;
    return screen.textContent = result;
  } else if (operation === "multiplication") {
    result = parseInt(previousNumber) * parseInt(currentNumber);
    currentNumber = result;
    return screen.textContent = result;
  } else {
    if (parseInt(currentNumber) === 0) {
      return screen.textContent = "Infinity";
    } else {
      result = parseInt(previousNumber) / parseInt(currentNumber);
      currentNumber = result;
      return screen.textContent = result;
    }
  }
})





