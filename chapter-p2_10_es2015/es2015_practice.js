// const
const name = "Giorgi";
var name = "Tatia"; // syntax Error
// -----
var fruit = "apple";
const fruit = "pear"; // syntax error, already declared
//-----------------------------------------------------------

function hoistVariable(){
	return gio;
	var gio = "giorgi";
}

// thanks to variable hoisting, this is equal to
function hoistVariable(){
	var gio;
	return gio;
	gio = "giorgi";
}

//let is also hoisted, but we cannot access let variable before it has been declared. This would result in reference error.
// variable is in temporal dead zone from start of the block until declaration is processed
function test(){
	return gio;
	let gio = "giorgi";
}

// you cannot redeclare the same variable using the let keyword multiple times

//--------------------------------------------------------------------------------------------------------------------
// template Strings
var firstName = "giorgi";
var lastName = "modebauer";

console.log(`Hello ${firstName} ${lastName}`); //mind the back tick

// wrong syntax when typing on multiple lines
/**
 "Writing
	on
multple lines"
 */

//using back tick
`
this
works 
just 
fine
`

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
	sayHi: () => `Hello ${this.firstName}`;
}

instructor.sayHi(); // "Hello undefined"

//--------------------------------------------------------------------------------------------------------------------
// Default Parameters
function add(a=10, b=20){
	return a+b;
}

add(); // 30
add(20); // 40

//--------------------------------------------------------------------------------------------------------------------
// For of loops
var arr = [1,2,3,4,5];

for(let val of arr){
	console.log(val);
}
// Can't access an index
// Can only be used on data structures with a Symbol.iterator method implemented (no objects!)