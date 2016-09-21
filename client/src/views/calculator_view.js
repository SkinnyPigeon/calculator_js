var Calculator = require( '../models/calculator' );

var CalculatorView = function() {
  this.calc = new Calculator();
  this.calculatorSpace = document.getElementById( 'calculator' );
  this.screen = document.createElement( 'input' );
  this.screen.id = "screen";
}

CalculatorView.prototype = {

  display: function() {

    var numberButtons = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, ".", "+", "-", "*", "/" ];

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
    this.calculatorSpace.appendChild( clearButton );

    clearButton.onclick = function(e) {
      this.screen.value = ""
    }.bind( this );

    var equalsButton = document.createElement( 'button' );
    equalsButton.innerHTML = "="; 
    equalsButton.id = "equals";
    this.calculatorSpace.appendChild( equalsButton );
    
    equalsButton.onclick = function(e) {
      var question = this.screen.value;
      this.calc.sum( question );
      var answer = this.calc.equals();
      this.screen.value = answer;
      this.calculatorSpace.appendChild( this.screen );
    }.bind( this );

    var memPlusButton = document.createElement( 'button' );
    memPlusButton.innerHTML = "M+";
    memPlusButton.id = "M+";
    this.calculatorSpace.appendChild( memPlusButton );

    memPlusButton.onclick = function(e) {
      this.calc.setMemory();
    }.bind( this );

    var memRecallButton = document.createElement( 'button' );
    memRecallButton.innerHTML = "MR";
    memRecallButton.id = "MR";
    this.calculatorSpace.appendChild( memRecallButton );

    memRecallButton.onclick = function(e) {
      var answer = this.calc.memory;
      this.screen.value = answer;
    }.bind( this );

    var allClearButton = document.createElement( 'button' );
    allClearButton.innerHTML = "AC";
    allClearButton.id = "AC";
    this.calculatorSpace.appendChild( allClearButton );

    allClearButton.onclick = function(e) {
      this.calc.resetMemory();
      this.screen.value = "";
    }.bind( this );

  this.calculatorSpace.appendChild( this.screen );


  },

  handleNumberButtonClick: function( id ) {
    this.currentScreen = this.screen.value
    this.screen.value = this.currentScreen + id;
    this.calculatorSpace.appendChild( this.screen );
  }

}

module.exports = CalculatorView;