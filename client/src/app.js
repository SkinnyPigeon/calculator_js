var CalculatorView = require( './views/calculator_view' );

window.onload = function() {
  main();
}

var main = function() {
  var calculator = new CalculatorView();
  calculator.display();
}