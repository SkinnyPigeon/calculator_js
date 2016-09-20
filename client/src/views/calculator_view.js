var Calculator = require( '../models/calculator' );

var CalculatorView = function() {
  this.calc = new Calculator();
  this.calculatorSpace = document.getElementById( 'calculator' );
  this.screen = document.createElement( 'h4' );
  this.calculatorSpace.appendChild( this.screen );
}

CalculatorView.prototype = {

  display: function() {

    var numberButtons = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "+", "-", "*", "/" ];
    var extraFunctionButtons = [ "+/-", "%", "C", "M+", "MR", "MC" ]
    var equalsButton = "=";

    for( var i = 0; i < numberButtons.length; i++ ) {
      var eachNumberButton = document.createElement( 'button' );
      eachNumberButton.innerText = numberButtons[i];
      eachNumberButton.id = numberButtons[i];
      this.calculatorSpace.appendChild( eachNumberButton );
      eachNumberButton.onclick = function(e) {
        var id = e.target.id;
        this.handleNumberButtonClick( id );
      }.bind( this );
    }

    
  },

  handleNumberButtonClick: function( id ) {
    this.currentScreen = this.screen.innerText
    this.screen.innerText = this.currentScreen + id;
    this.calculatorSpace.appendChild( this.screen );
  }

}

module.exports = CalculatorView;