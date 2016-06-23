window.onload = function () {

  // document.body.addEventListener('keypress', function(e) {
  //   var key = e.keyCode;
  //   if (key === 8) {
  //     console.log("BACKSPACE");
  //   } else {
  //     var results = calculate();
  //     console.log(results);
  //   }
    // console.log(e.keyCode);
    // if (key === 13) {
    //   // Enter key
    //   e.preventDefault();
    //   console.log("ENTER");
    //   calculate();
    // } else if (key === 8) {
    //   // Backspace key
    // }
  // });

  var buttons = document.getElementsByTagName('button'); // Select all buttons
  var result = document.querySelectorAll('#output')[0]; // Select the result p tag
  var input = document.querySelectorAll('#input')[0]; // Select the input-field
  var clear = document.querySelector('#clear'); // Select the clearAll-button

  // Loop through all buttons and add event listeners
  for (var i = 0; i < buttons.length; i += 1) {
    buttons[i].addEventListener("click", addValue(i));
    buttons[i].addEventListener("click", calculate());
  }
  function addValue(i) {
      return function () {
        if (buttons[i].innerHTML === '÷') { // We need to replace this with an operator JS can understand
           input.value  += '/';
        } else if (buttons[i].innerHTML === 'x') { // We need to replace this with an operator JS can understand
           input.value  += '*';
        } else if (buttons[i].innerHTML === 'C') { // For our calculate to clear, we need the input field cleared first
           input.value = '';
        } else if (buttons[i].innerHTML === 'DEL') { // This removes the last character from the input
           input.value = input.value.substr(0, input.value.length - 1);
        } else {
           input.value += buttons[i].innerHTML; // This adds the content of the button to the input
        }
      };
  }
  function calculate() {
    // console.log("CALC");
  return function () {
      // console.log("CALC");
      if(input.value === '') {
        result.innerHTML = 0;
      } else {
        // This will throw an error when the input ends with an operator.
        result.innerHTML = eval(input.value);
      }
    };
  }
};









// var part1 = 0;
// var operator = '';
//
// // Input buttons
// document.querySelector('#zero').addEventListener("click", function(){modifyInput(0);});
// document.querySelector('#one').addEventListener("click", function(){modifyInput(1);});
// document.querySelector('#two').addEventListener("click", function(){modifyInput(2);});
// document.querySelector('#three').addEventListener("click", function(){modifyInput(3);});
// document.querySelector('#four').addEventListener("click", function(){modifyInput(4);});
// document.querySelector('#five').addEventListener("click", function(){modifyInput(5);});
// document.querySelector('#six').addEventListener("click", function(){modifyInput(6);});
// document.querySelector('#seven').addEventListener("click", function(){modifyInput(7);});
// document.querySelector('#eight').addEventListener("click", function(){modifyInput(8);});
// document.querySelector('#nine').addEventListener("click", function(){modifyInput(9);});
// document.querySelector('#dot').addEventListener("click", function(){modifyInput(".");});
//
// // Operator buttons
// document.querySelector('#divide').addEventListener("click", function(){
//   if(operator === '') {
//     var inputValue = document.querySelector('#input').value;
//     part1 = inputValue;
//     modifyOutput(inputValue);
//     clearInput();
//     operator = '/';
//   } else {
//     // Handle longer math problems here.
//     clearInput();
//   }
// });
//
// // Clear
// document.querySelector('#clear').addEventListener("click", function(){
//   clearInput();
// });
//
// function clearInput() {
//   var inputField = document.querySelector('#input').value = "";
// }
//
// function modifyInput(input) {
//   var inputField = document.querySelector('#input').value = document.querySelector('#input').value + input;
// }
//
// function modifyOutput(output) {
//   console.log(output);
//   var outputField = document.querySelector('#output').innerHTML = output;
// }







//
// document.querySelector('#add').addEventListener("click", function(){
//   var number1 = document.querySelector('#number1');
//   var number2 = document.querySelector('#number2');
//   var sum = Number(number1.value) + Number(number2.value);
//
//   // Check if the sum is a number
//   if (isNaN(sum)) {
//     console.log("Both inputs has to be numbers!");
//   } else {
//     // console.log("SUM: " + sum);
//     document.querySelector('#out-put').innerHTML = sum;
//   }
// });
//
// document.querySelector('#sub').addEventListener("click", function(){
//   var number1 = document.querySelector('#number1');
//   var number2 = document.querySelector('#number2');
//   var sum = Number(number1.value) - Number(number2.value);
//
//   // Check if the sum is a number
//   if (isNaN(sum)) {
//     console.log("Both inputs has to be numbers!");
//   } else {
//     // console.log("SUM: " + sum);
//     document.querySelector('#out-put').innerHTML = sum;
//   }
// });
//
//
// document.querySelector('#mul').addEventListener("click", function(){
//   var number1 = document.querySelector('#number1');
//   var number2 = document.querySelector('#number2');
//   var sum = Number(number1.value) * Number(number2.value);
//
//   // Check if the sum is a number
//   if (isNaN(sum)) {
//     console.log("Both inputs has to be numbers!");
//   } else {
//     // console.log("SUM: " + sum);
//     document.querySelector('#out-put').innerHTML = sum;
//   }
// });
//
//
// document.querySelector('#div').addEventListener("click", function(){
//   var number1 = document.querySelector('#number1');
//   var number2 = document.querySelector('#number2');
//   var sum = Number(number1.value) / Number(number2.value);
//
//   // Check if the sum is a number
//   if (isNaN(sum)) {
//     console.log("Both inputs has to be numbers!");
//   } else {
//     // console.log("SUM: " + sum);
//     document.querySelector('#out-put').innerHTML = sum;
//   }
// });
