var Calculator = function() {
  this.result = 0;
  this.memory = 0;
}

Calculator.prototype = {

  sum: function( maths ) {
    this.result = maths;
  },

  setMemory: function() {
    this.memory = this.result;
  },

  resetMemory: function() {
    this.memory = 0;
  }

}

module.exports = Calculator;