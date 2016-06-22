
// var addition = function(number1, number2) {
//   var sum = number1 + number2;
//   console.log(sum);
// };


document.querySelector('#add').addEventListener("click", function(){
  var number1 = document.querySelector('#number1');
  var number2 = document.querySelector('#number2');
  var sum = Number(number1.value) + Number(number2.value);

  // Check if the sum is a number
  if (isNaN(sum)) {
    console.log("Both inputs has to be numbers!");
  } else {
    console.log("SUM: " + sum);
  }
});

document.querySelector('#sub').addEventListener("click", function(){
  var number1 = document.querySelector('#number1');
  var number2 = document.querySelector('#number2');
  var sum = Number(number1.value) - Number(number2.value);

  // Check if the sum is a number
  if (isNaN(sum)) {
    console.log("Both inputs has to be numbers!");
  } else {
    console.log("SUM: " + sum);
  }
});


document.querySelector('#mul').addEventListener("click", function(){
  var number1 = document.querySelector('#number1');
  var number2 = document.querySelector('#number2');
  var sum = Number(number1.value) * Number(number2.value);

  // Check if the sum is a number
  if (isNaN(sum)) {
    console.log("Both inputs has to be numbers!");
  } else {
    console.log("SUM: " + sum);
  }
});


document.querySelector('#div').addEventListener("click", function(){
  var number1 = document.querySelector('#number1');
  var number2 = document.querySelector('#number2');
  var sum = Number(number1.value) / Number(number2.value);

  // Check if the sum is a number
  if (isNaN(sum)) {
    console.log("Both inputs has to be numbers!");
  } else {
    console.log("SUM: " + sum);
  }
});
