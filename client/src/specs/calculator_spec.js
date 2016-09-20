var assert = require( 'chai' ).assert;
var Calculator = require( '../models/calculator' );

describe( "The Calculator: ", function() {

  beforeEach( function() {
    calc = new Calculator();
  });

  it( "Should be able to set a number", function() {
    calc.setNumber( 2 );
    assert.equal( 2, calc.newNumber );
  });

  it( "Should be able to add two numbers", function() {
    calc.setNumber( 2 );
    calc.sum( "+" );
    calc.setNumber( 3 );
    calc.equals()
    assert.equal( 5, calc.result );
  });

});