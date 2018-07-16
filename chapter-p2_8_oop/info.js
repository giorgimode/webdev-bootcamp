/** Keyword 'new' does the following:
 1. Creates an object out of thin air
 2. Assigns the value of 'this' to be that object
 3. Adds 'return this' to the end of the function
 4. Creates a link (which we can access as __proto__) between the object created and the prototype property of the constructor function
 * */

/**
 *
 1. Every constructor function has a property on it called "prototype", which is an object
 2. The prototype object has a property on it called "constructor", which points back to the constructor function
 3. Anytime an object is created using the 'new' keyword, a property called "__proto__" gets created, linking the object
 and the prototype property of the constructor function
 * */

/**
 * In JS injeritance we do not pass one constructor to another. We pass prototype property from one constructor to another
 *
 * Object.create
 Creates a brand new function and accepts as its first parameter, what the prototype object should be for the newly created object.
 * */

function Person(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
}

Person.prototype.sayHi = function () {
	return "Hello " + this.firstName + " " + this.lastName;
}

function Student(firstName, lastName) {
	return Person.apply(this, arguments);
}

Student.prototype = Object.create(Person.prototype);

// Why not 'new'?
/**
 * This will do almost the same thing, but add additional unnecessary properties on the prototype object
 * (since it is creating an object with undefined properties just for the prototype).
 * */
Student.prototype = new Person;

Student.prototype = Object.create(Person.prototype);
/**
 * After creating a Student prototype from Person, constructor on prototype of Student will be referring to Person */
Student.prototype.constructor; // Person
// to fix this problem, we need to reset the constructor:
Student.prototype.constructor = Student;

/**
 * Two parts of inheritance
 1. Set the prototype to be an object created with another prototype
 2. Reset the constructor property
 *
 * */
