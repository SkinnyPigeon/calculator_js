/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var CalculatorView = __webpack_require__( 1 );
	
	window.onload = function() {
	  main();
	}
	
	var main = function() {
	  var calculator = new CalculatorView();
	  calculator.display();
	}

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var Calculator = __webpack_require__( 2 );
	
	var CalculatorView = function() {
	  this.calc = new Calculator();
	  this.calculatorSpace = document.getElementById( 'calculator' );
	  this.screen = document.createElement( 'input' );
	  this.screen.id = "screen";
	  this.calculatorSpace.appendChild( this.screen );
	}
	
	CalculatorView.prototype = {
	
	  display: function() {
	
	    var numberButtons = [ ".", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "+", "-", "*", "/" ];
	    var extraFunctionButtons = [ "+/-", "%", "M+", "MR", "MC" ]
	
	    for( var i = 0; i < numberButtons.length; i++ ) {
	      var eachNumberButton = document.createElement( 'button' );
	      eachNumberButton.innerHTML = numberButtons[i];
	      eachNumberButton.id = numberButtons[i];
	      this.calculatorSpace.appendChild( eachNumberButton );
	      eachNumberButton.onclick = function(e) {
	        var id = e.target.id;
	        this.handleNumberButtonClick( id );
	      }.bind( this );
	    }
	
	    var clearButton = document.createElement( 'button' );
	    clearButton.innerHTML = "C"; 
	    clearButton.id = "C";
	    this.calculatorSpace.appendChild( clearButton );
	
	    clearButton.onclick = function(e) {
	      this.screen.value = ""
	    }.bind( this );
	
	    var equalsButton = document.createElement( 'button' );
	    equalsButton.innerHTML = "="; 
	    equalsButton.id = "=";
	    this.calculatorSpace.appendChild( equalsButton );
	    
	    equalsButton.onclick = function(e) {
	      var question = this.screen.value;
	      this.calc.sum( question );
	      var answer = this.calc.equals();
	      this.screen.value = answer;
	      this.calculatorSpace.appendChild( this.screen );
	    }.bind( this );
	
	    var memPlusButton = document.createElement( 'button' );
	    memPlusButton.innerHTML = "M+";
	    memPlusButton.id = "M+";
	    this.calculatorSpace.appendChild( memPlusButton );
	
	    memPlusButton.onclick = function(e) {
	      this.calc.setMemory();
	    }.bind( this );
	
	    var memRecallButton = document.createElement( 'button' );
	    memRecallButton.innerHTML = "MR";
	    memRecallButton.id = "MR";
	    this.calculatorSpace.appendChild( memRecallButton );
	
	    memRecallButton.onclick = function(e) {
	      var answer = this.calc.memory;
	      this.screen.value = answer;
	    }.bind( this );
	
	    var allClearButton = document.createElement( 'button' );
	    allClearButton.innerHTML = "AC";
	    allClearButton.id = "AC";
	    this.calculatorSpace.appendChild( allClearButton );
	
	    allClearButton.onclick = function(e) {
	      this.calc.resetMemory();
	      this.screen.value = "";
	    }.bind( this );
	
	
	  },
	
	  handleNumberButtonClick: function( id ) {
	    this.currentScreen = this.screen.value
	    this.screen.value = this.currentScreen + id;
	    this.calculatorSpace.appendChild( this.screen );
	  }
	
	}
	
	module.exports = CalculatorView;

/***/ },
/* 2 */
/***/ function(module, exports) {

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
	    var answer = eval( this.result );
	    this.result = parseFloat(( answer ).toFixed(8));
	    return this.result;
	  },
	
	
	
	}
	
	module.exports = Calculator;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map