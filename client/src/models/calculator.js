var Calculator = function() {
  this.result = 0;
}

Calculator.prototype = {

  add: function( array ) {
    for( var i = 0; i < array.length; i++ ) {
      this.result += array[i];
    }
  }

}

module.exports = Calculator;