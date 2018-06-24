// Strict Mode
"use strict"

console.log(this); // window

function whatIsThis(){
	return this;
}

whatIsThis(); // undefined

function variablesInThis(){
	// since we are in strict mode this is undefined
	// so what happens if we add a property on undefined?
	// let's see what happens when we call the function...
	this.person = "Elie";
}

variablesInThis(); // TypeError, can't set person on undefin