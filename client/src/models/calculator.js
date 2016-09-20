var Calculator = function() {
  this.initialState = 0;
  this.lastNumber = 0;
  this.newNumber = 0;
  this.result = 0;
  this.operator = ""
}

Calculator.prototype = {

  setNumber: function( number ) {
    this.lastNumber = this.newNumber
    this.newNumber = number;
  },

  sum: function( operator ) {
    this.operator = operator;
  },

  equals: function() {
    if( this.operator === "+" ) {
      this.result = this.lastNumber += this.newNumber;
    }
  }

}

module.exports = Calculator;