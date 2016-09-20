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
/***/ function(module, exports) {

	var CalculatorView = function() {
	  this.calculator = document.getElementById( 'calculator' );
	  this.screen = document.createElement( 'h4' );
	}
	
	CalculatorView.prototype = {
	
	  display: function() {
	
	    var buttons = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "+", "-", "*", "/", "%", "+/-", "M+", "MR", "MC" ];
	    for( var i = 0; i < buttons.length; i++ ) {
	      var eachButton = document.createElement( 'button' );
	      eachButton.innerText = buttons[i];
	      eachButton.id = buttons[i];
	      this.calculator.appendChild( eachButton );
	      eachButton.onclick = function(e) {
	        var id = e.target.id;
	        console.log( id );
	        this.handleButtonClick( id );
	      }.bind( this );
	    }
	  },
	
	  handleButtonClick: function( id ) {
	
	  }
	
	}
	
	module.exports = CalculatorView;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map