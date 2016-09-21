var Calculator = function() {
  this.result = 0;
  this.memory = "";
}

Calculator.prototype = {

  sum: function( maths ) {
    this.result = maths;
  },

  setMemory: function() {
    this.memory = this.result;
  },

  resetMemory: function() {
    this.memory = "";
  },

  equals: function() {
    var answer = eval( this.result );
    this.result = parseFloat(( answer ).toFixed(8));
    return this.result;
  },



}

module.exports = Calculator;