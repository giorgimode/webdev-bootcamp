//--------------------------------------------------------------------------------------------------------------------
//Arrow functions
arr.map(val => val.first + " " + val.last);

arr.map(function(val){
	return val.first + " " + val.last;
});

/** NOTE:
 'this' keyword in side arrow function is not the same as in normal anonymous functions
 Arrow functions do not have their own keyword this.
 Inside of an arrow function, the keyword this has its original meaning from the enclosing context.*/
var instructor = {
	firstName: "Elie",
	sayHi: function(){
		setTimeout(() => console.log("Hello " + this.firstName), 1000);
	}
};

instructor.sayHi(); // "Hello Elie"

// NOTE: arrow functions do not get their own keyword arguments, but if it's in another function, arguments keyword
// will give you arguments of outer function

/**
 * Arrow functions should NEVER be used as methods in objects since we will get the incorrect value of the keyword this
 * */

var instructor = {
	firstName: "Elie",
	sayHi: () => `Hello ${this.firstName}`
}

instructor.sayHi(); // "Hello undefined"
