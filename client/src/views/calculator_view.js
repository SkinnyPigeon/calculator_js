var Calculator = require( '../models/calculator' );

var CalculatorView = function() {
  this.calculator = document.getElementById( 'calculator' );
  this.screen = document.createElement( 'h4' );
  this.calculator.appendChild( this.screen );
}

CalculatorView.prototype = {

  display: function() {

    var buttons = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "+", "-", "*", "/", "=", "%", "+/-","C", "M+", "MR", "MC" ];
    for( var i = 0; i < buttons.length; i++ ) {
      var eachButton = document.createElement( 'button' );
      eachButton.innerText = buttons[i];
      eachButton.id = buttons[i];
      this.calculator.appendChild( eachButton );
      eachButton.onclick = function(e) {
        var id = e.target.id;
        this.handleButtonClick( id );
      }.bind( this );
    }
  },

  handleButtonClick: function( id ) {
    this.currentScreen = this.screen.innerText
    this.screen.innerText = this.currentScreen + id;
    this.calculator.appendChild( this.screen );
  }

}

module.exports = CalculatorView;