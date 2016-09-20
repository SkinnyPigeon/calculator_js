var assert = require( 'chai' ).assert;
var Calculator = require( '../models/calculator' );

describe( "The Calculator: ", function() {

  beforeEach( function() {
    calc = new Calculator();
  });

  it( "Should be able to add", function() {
    calc.sum( 5 + 2 );
    assert.equal( 7, calc.result );
  });

  it( "Should be able to subtract", function() {
    calc.sum( 10 - 50 );
    assert.equal( -40, calc.result );
  });

  it( "Should be able to do multiplication", function() {
    calc.sum( 5 * 3 );
    assert.equal( 15, calc.result );
  });

  it( "Should be able to do division", function() {
    calc.sum( 15 / 3 );
    assert.equal( 5, calc.result );
  });

  it( "Should do multiplication before addition", function() {
    calc.sum( 3 + 2 * 6 );
    assert.equal( 15, calc.result );
  }); 

  it( "Should be able to store things in memory", function() {
    calc.sum( 3 + 2 * 6 );
    calc.setMemory();
    assert.equal( 15, calc.memory );
  });

  it( "Should be able to reset the memory", function() {
    calc.sum( 3 + 2 * 6 );
    calc.setMemory();
    calc.resetMemory();
    assert.equal( 0, calc.memory );
  });


});











