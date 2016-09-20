var assert = require( 'chai' ).assert;
var Calculator = require( '../models/calculator' );

describe( "The Calculator: ", function() {

  beforeEach( function() {
    calc = new Calculator();
  });

  it( "Should be able to add a number", function() {
    calc.setNumber( 2 );
    calc.sum( "+" );
    assert.equal( 2, calc.result );
  });

  it( "Should be able to add mulitple numbers", function() {
    calc.setNumber( 2 );
    calc.sum( "+" );
    calc.setNumber( 2 );
    calc.sum( "+" );
    calc.setNumber( 2 );
    calc.sum( "+" );
    assert.equal( 6, calc.result );
  });

  it( "Should be able to subtract a number", function() {
    calc.setNumber( 2 );
    calc.sum( "-" );
    assert.equal( -2, calc.result );
  });

  it( "Should be able to subtract mulitple numbers", function() {
    calc.setNumber( 2 );
    calc.sum( "-" );
    calc.setNumber( 2 );
    calc.sum( "-" );
    calc.setNumber( 2 );
    calc.sum( "-" );
    assert.equal( -6, calc.result );
  });

});