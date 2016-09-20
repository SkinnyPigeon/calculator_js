var CalculatorView = function() {
  this.calculator = document.getElementById( 'calculator' );
  this.screen = document.createElement( 'h4' );
}

CalculatorView.prototype = {

  display: function() {

    var buttons = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "+", "-", "*", "/", "%", "+/-", "M+", "MR", "MC" ];
    for( var i = 0; i < buttons.length; i++ ) {
      var eachButton = document.createElement( 'button' );
      eachButton.innerText = buttons[i];
      eachButton.id = buttons[i];
      this.calculator.appendChild( eachButton );
      eachButton.onclick = function(e) {
        var id = e.target.id;
        console.log( id );
        this.handleButtonClick( id );
      }.bind( this );
    }
  },

  handleButtonClick: function( id ) {

  }

}

module.exports = CalculatorView;