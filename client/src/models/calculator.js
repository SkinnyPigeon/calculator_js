var Calculator = function() {
  this.result = 0;
}

Calculator.prototype = {

  sum: function( maths ) {
    this.result = maths;
  }

}

module.exports = Calculator;