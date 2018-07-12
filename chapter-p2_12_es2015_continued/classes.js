/**
 A new reserved keyword provided by ES2015

 The class keyword creates a constant - can not be redeclared

 The class keyword is an abstraction of constructor functions and prototypes. JavaScript does not have built in support for object oriented programming

 The class keyword does not hoist

 Still use `new` keyword to create objects
 *
 * */

// ES5
function Student(firstName, lastName){
	this.firstName = firstName;
	this.lastName = lastName;
}

var elie = new Student('Elie', 'Schoppik');

//ES2015
class Student {
	constructor(firstName, lastName){
		this.firstName = firstName;
		this.lastName = lastName;
	}
}

var elie = new Student('Elie', 'Schoppik'); // same as ES5

// -----------------------
//ES5
/** Shared methods and properties are placed directly on the function's prototype property*/
Student.prototype.sayHello = function(){
	return "Hello " + this.firstName + " " + this.lastName;
}

//ES2015
/**
 placed inside of class keyword
 no 'function' keyword - similar to object shorthand notation
 under the hood it is placing methods on the prototype object
 * */
class Student {
	constructor(firstName, lastName){
		this.firstName = firstName;
		this.lastName = lastName;
	}
	sayHello(){
		return `Hello ${this.firstName} ${this.lastName}`;
	}
}