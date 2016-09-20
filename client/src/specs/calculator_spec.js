var assert = require( 'chai' ).assert;
var Calculator = require( '../models/calculator' );

describe( "The Calculator: ", function() {

  beforeEach( function() {
    calc = new Calculator();
  });

  it( "Should be able to set a number", function() {
    calc.setNumber( 2 );
    assert.equal( 2, calc.thisNumber );
  });

});