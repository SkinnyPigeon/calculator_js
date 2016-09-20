var Calculator = function() {
  this.result = 0;
  this.number = 0;
}

Calculator.prototype = {

  setNumber: function( number ) {
    this.number = number; 
  },

  sum: function( operator ) {
    if( operator === "+") {
      this.result += this.number;
    } else if( operator === "-" ) {
      this.result -= this.number;
    }
  }

}

module.exports = Calculator;