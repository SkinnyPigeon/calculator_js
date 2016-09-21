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
    try {
      var answer = eval( this.result );
      this.result = parseFloat(( answer ).toFixed(8));
      return this.result;
    }
    catch( err ) {
      window.alert( "Unexpected Character" );
      return this.result;
    }

  },



}

module.exports = Calculator;