// let display = document.getElementById('inputBox');
// let buttons = document.querySelectorAll('button');
// let btnArray = Array.from(buttons);
// let string = '';
// btnArray.forEach(btn => {
//   btn.addEventListener('click', (e) => {
//     if (e.target.innerHTML == 'C') {
//       string = '';
//       display.value = string;
//     } else if (e.target.innerHTML == 'DEL') {
//       string = string.substring(0, string.length-1);
//       display.value = string;
//     } else if (e.target.innerHTML == '=') {
//       string = eval(string);
//       display.value = string;
//     } else {
//       string += e.target.innerHTML;
//       display.value = string;
//     }
//   })
// })
































const resultElement = document.getElementById('inputBox');
const clrbtn = document.getElementById('clear-button');
const deletebtn = document.getElementById('delete-button');
const percentagebtn = document.getElementById('percentage-button');
const dividebtn = document.getElementById('divide-button');
const multiplybtn = document.getElementById('multiply-button');
const minusbtn = document.getElementById('minus-button');
const addbtn = document.getElementById('add-button');
const equalbtn = document.getElementById('equal-button');
const numberbtn = document.querySelectorAll('.number');
const decimalBtn = document.getElementById('decimal-button');




let result = '';
let operation = '';
let prevousOperand = 0;



let updateResult = () => {
  if (operation) {
    resultElement.value = `${prevousOperand} ${operation} ${result}`;
  } else {
    resultElement.value = result;
  }
}

let appendNumber = (number) => {
  if(number == '.' && result.includes('.')) {
    return;
  }
  result += number;
  updateResult(); 
}

let selectOperator = (operatorValue) => {
  if (result === '') {
    return;
  }
  if (operation !== '' && prevousOperand !== '') {
    calculateResult();
  }
  operation = operatorValue;
  prevousOperand = result;
  result = '';
  updateResult();
}

let calculateResult = () => {
  let evaluateResult;
  let prev = parseFloat(prevousOperand);
  let curr = parseFloat(result);

  if (isNaN(prev) || isNaN(curr)) {
    return;
  }

  switch (operation) {
    case '+':
      evaluateResult = prev + curr; 
      break;
    case '-':
        evaluateResult = prev - curr; 
      break;
    case '÷':
      evaluateResult = prev / curr; 
      break;
    case '*':
        evaluateResult = prev * curr; 
      break;
    case '%':
        evaluateResult = prev % curr; 
      break;
  
    default:
      break;

      

  }
  result = evaluateResult.toString();
  operation = '';
  prevousOperand = '';
  
}

numberbtn.forEach(button => {
  button.addEventListener('click', () => {
    appendNumber(button.innerHTML);
  })
});
clrbtn.addEventListener('click', () => {
  result = '';
  operation = '';
  prevousOperand = 0;
  updateResult();
});
deletebtn.addEventListener('click', () =>{
  result = result.substring(0, result.length-1);
  updateResult();
})
decimalBtn.addEventListener('click', (e) => selectOperator(e.target.innerHTML))
addbtn.addEventListener('click', (e) => selectOperator(e.target.innerHTML))
minusbtn.addEventListener('click', (e) => selectOperator(e.target.innerHTML))
multiplybtn.addEventListener('click', (e) => selectOperator(e.target.innerHTML))
dividebtn.addEventListener('click', (e) => selectOperator(e.target.innerHTML))
percentagebtn.addEventListener('click', (e) => selectOperator(e.target.innerHTML))
equalbtn.addEventListener('click', (e) => {
  if (result === '') {
    return
  }
  calculateResult()
  updateResult();
})

