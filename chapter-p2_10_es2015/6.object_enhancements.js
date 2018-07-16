var firstName = "Elie";
var lastName = "Schoppik";

// ES5
var instructor = {
	firstName: firstName,
	lastName: lastName
}

// ES2015
//Object Shorthand Notation
var instructor = {
	firstName,
	lastName
}
//-----------------------

// ES5
var instructor = {
	sayHello: function(){
		return "Hello!";
	}
}

// ES2015 - do NOT use arrow functions here, because keyword 'this' will not reference the object if used here
var instructor = {
	sayHello(){
		return "Hello!";
	}
}
//---------------------------------------------------------------------------------------------------------------
// Computed Property Names
// ES5
var firstName = "Elie";
var instructor = {};
instructor[firstName] = "That's me!"; //same as instructor["Elie"]

instructor.Elie; // "That's me!"

// ------------------ES2015-----------------
var firstName = "Elie";
var instructor = {
	[firstName]: "That's me!"
}

instructor.Elie; // "That's me!"

