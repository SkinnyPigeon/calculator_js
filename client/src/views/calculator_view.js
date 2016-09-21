var Calculator = require( '../models/calculator' );

var CalculatorView = function() {
  this.calc = new Calculator();
  this.calculatorSpace = document.getElementById( 'calculator' );
  this.screen = document.createElement( 'h4' );
  this.calculatorSpace.appendChild( this.screen );
}

CalculatorView.prototype = {

  display: function() {

    var numberButtons = [ ".", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "+", "-", "*", "/" ];
    var extraFunctionButtons = [ "+/-", "%", "M+", "MR", "MC" ]

    for( var i = 0; i < numberButtons.length; i++ ) {
      var eachNumberButton = document.createElement( 'button' );
      eachNumberButton.innerHTML = numberButtons[i];
      eachNumberButton.id = numberButtons[i];
      this.calculatorSpace.appendChild( eachNumberButton );
      eachNumberButton.onclick = function(e) {
        var id = e.target.id;
        this.handleNumberButtonClick( id );
      }.bind( this );
    }

    var clearButton = document.createElement( 'button' );
    clearButton.innerHTML = "C"; 
    clearButton.id = "C";
    clearButton.onclick = function(e) {
      this.screen.innerHTML = ""
    }.bind( this );
    this.calculatorSpace.appendChild( clearButton );

    var equalsButton = document.createElement( 'button' );
    equalsButton.innerHTML = "="; 
    equalsButton.id = "=";
    this.calculatorSpace.appendChild( equalsButton );
    
    equalsButton.onclick = function(e) {
      var question = this.screen.innerHTML;
      this.calc.sum( question );
      var answer = this.calc.equals();
      this.screen.innerHTML = answer;
      this.calculatorSpace.appendChild( this.screen );
    }.bind( this );

  },

  handleNumberButtonClick: function( id ) {
    this.currentScreen = this.screen.innerHTML
    this.screen.innerHTML = this.currentScreen + id;
    this.calculatorSpace.appendChild( this.screen );
  }

}

module.exports = CalculatorView;