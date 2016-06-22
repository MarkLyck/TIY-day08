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
  var coNumber = Number(value);
  var coString = String(value);
  var coBoolean = Boolean(value);

  var row = document.createElement('tr');
  var tabledata = document.createElement('td');

  var textnode = document.createTextNode(value);
  var textnode2 = document.createTextNode(coNumber);
  var textnode3 = document.createTextNode(coString);
  var textnode4 = document.createTextNode(coBoolean);

  tabledata.appendChild(textnode);
  tabledata.appendChild(textnode2);
  tabledata.appendChild(textnode3);
  tabledata.appendChild(textnode4);

  row.appendChild(tabledata);
  var table = document.querySelector('#table').appendChild(row);

  // console.log("oldVal: " + value + "numVal: " + coNumber + "strVal: " + coString + "boolVal: " + coBoolean);
  // console.log();
});
