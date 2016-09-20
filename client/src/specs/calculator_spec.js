var assert = require( 'chai' ).assert;
var Calculator = require( '../models/calculator' );

describe( "The Calculator: ", function() {

  beforeEach( function() {
    calc = new Calculator();
  });

  it( "Should be able to add numbers", function() {
    calc.add( [ 2, 2 ] );
    assert.equal( 4, calc.result );
  });

  it( "should be able to add mulitple numbers", function() {
    calc.add( [ 2, 2, 2 ] );
    assert.equal( 6, calc.result );
  });

});