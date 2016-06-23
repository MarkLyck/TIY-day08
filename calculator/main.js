window.onload = function () {

  // Using KeyDown here instead of keypress, so it will catch backspace
  document.body.addEventListener('keyup', function(e) {
    var key = e.keyCode;
    // If the ENTER key is pressed
    if (key === 13) {
      e.preventDefault();
      calc();
    // If the BACKSPACE key is pressed
    } else if (key === 8) {
      e.preventDefault();
      input.value = input.value.substr(0, input.value.length - 1);
      calc();
    }
  });

  var buttons = document.getElementsByTagName('button'); // Select all buttons
  var result = document.querySelector('#output'); // Select the result p tag
  var input = document.querySelector('#input'); // Select the input-field
  var clear = document.querySelector('#clear'); // Select the clearAll-button

  // Loop through all buttons and add event listeners
  for (var i = 0; i < buttons.length; i += 1) {
    buttons[i].addEventListener("click", addValue.bind(null, i));
  }
  function addValue(i) {
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
      calc();
  }
  function calc() {
    if(input.value === '') {
      result.innerHTML = 0;
    } else {
      // This will throw an error when the input ends with an operator.
      result.innerHTML = eval(input.value);

      // Instead of using eval() store every number and operator in an array.
      // Then in calc loop through array, to figure out which ones are numbers and which ones are operators.
      // And calculate everything together one at a time.

      // Add regex for parenthasis?
    }
  }
};







// This code would satisfy adventurer mode for calculator.
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
