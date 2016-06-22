var inputValues = [undefined,
  null,
  true,
  false,
  "",
  "1.2",
  "one",
  0,
  -0,
  NaN,
  Infinity,
  -Infinity,
  1,
  {},
  [],
  [12],
  ['something'],
  function(){}
];

var outputValues = inputValues.map(function(value) {

  var row = document.createElement('tr');

  var coNumber = document.createElement('td');
  coNumber.innerHTML = Number(value);
  row.appendChild(coNumber);
  
  var coString = document.createElement('td');
  coString.innerHTML = String(value);
  row.appendChild(coString);

  var coBoolean = document.createElement('td');
  coBoolean.innerHTML = Boolean(value);
  row.appendChild(coBoolean);

  document.querySelector('#table').appendChild(row);
});
