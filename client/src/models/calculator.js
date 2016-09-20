var Calculator = function() {
  this.result = 0;
}

Calculator.prototype = {

  add: function( array ) {
    for( var i = 0; i < array.length; i++ ) {
      this.result += array[i];
    }
  },

  subtract: function( array ) {
    for( var i = 0; i < array.length; i++ ) {
      this.result += array[i] - array[ i + 1 ];
    }
  }

}

module.exports = Calculator;