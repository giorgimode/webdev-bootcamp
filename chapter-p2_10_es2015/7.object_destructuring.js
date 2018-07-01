/**
 * The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values
 * from arrays, or properties from objects, into distinct variables.
 * */
var a, b, rest;
[a, b] = [10, 20];
console.log(a); // 10
console.log(b); // 20

[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a); // 10
console.log(b); // 20
console.log(rest); // [30, 40, 50]

({a, b} = {a: 10, b: 20});
console.log(a); // 10
console.log(b); // 20

// Stage 3 proposal
({a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40});
console.log(a); // 10
console.log(b); // 20
console.log(rest); // {c: 30, d: 40}

//--
var x = [1, 2, 3, 4, 5];
var [y, z] = x;
console.log(y); // 1
console.log(z); // 2

// --
var foo = ['one', 'two', 'three'];

var [one, two, three] = foo;
console.log(one); // "one"
console.log(two); // "two"
console.log(three); // "three"

//Default values
var a, b;

[a = 5, b = 7] = [1];
console.log(a); // 1
console.log(b); // 7

// Swapping variables
var a = 1;
var b = 3;

[a, b] = [b, a];
console.log(a); // 3
console.log(b); // 1

//Ignoring some returned values
function f() {
	return [1, 2, 3];
}

var [a, , b] = f();
console.log(a); // 1
console.log(b); // 3

// Object destructuring
// Note tham new variables have same names
var o = {p: 42, q: true};
var {p, q} = o;

console.log(p); // 42
console.log(q); // true

// Assignment without declaration
var a, b;

({a, b} = {a: 1, b: 2});
/**
 *
 * The round braces ( ... ) around the assignment statement is required syntax when using object literal destructuring assignment without a declaration.
 {a, b} = {a: 1, b: 2} is not valid stand-alone syntax, as the {a, b} on the left-hand side is considered a block and not an object literal.

 However, ({a, b} = {a: 1, b: 2}) is valid, as is var {a, b} = {a: 1, b: 2}
 NOTE: Your ( ... ) expression needs to be preceded by a semicolon or it may be used to execute a function on the previous line.
 * */

//Assigning to new variable names
var o = {p: 42, q: true};
var {p: foo, q: bar} = o;

console.log(foo); // 42
console.log(bar); // true

// Setting a function parameter's default value
// ES5
function drawES5Chart(options) {
	options = options === undefined ? {} : options;
	var size = options.size === undefined ? 'big' : options.size;
	var cords = options.cords === undefined ? {x: 0, y: 0} : options.cords;
	var radius = options.radius === undefined ? 25 : options.radius;
	console.log(size, cords, radius);
	// now finally do some chart drawing
}

/**
 * In the function signature for drawES2015Chart above, the destructured left-hand side is assigned to an empty object
 * literal on the right-hand side: {size = 'big', cords = {x: 0, y: 0}, radius = 25} = {}. You could have also written
 * the function without the right-hand side assignment. However, if you leave out the right-hand side assignment,
 * the function will look for at least one argument to be supplied when invoked, whereas in its current form,
 * you can simply call drawES2015Chart() without supplying any parameters. The current design is useful if you want
 * to be able to call the function without supplying any parameters, the other can be useful when you want to ensure
 * an object is passed to the function.
 * */
//ES2015
function drawES2015Chart({size = 'big', cords = {x: 0, y: 0}, radius = 25} = {}) {
	console.log(size, cords, radius);
	// do some chart drawing
}

// Nested object and array destructuring
var metadata = {
	title: 'Scratchpad',
	translations: [
		{
			locale: 'de',
			title: 'JavaScript-Umgebung'
		}
	],
	url: '/en-US/docs/Tools/Scratchpad'
};

var {title: englishTitle, translations: [{title: localeTitle}]} = metadata;

console.log(englishTitle); // "Scratchpad"
console.log(localeTitle);  // "JavaScript-Umgebung"

//Array destructuring (mind the brackets instead of curly brackets used for object destructuring)
var foo = ['one', 'two', 'three'];

var [one, two, three] = foo;
console.log(one); // "one"
console.log(two); // "two"
console.log(three); // "three"

// For of iteration and destructuring
var people = [
	{
		name: 'Mike Smith',
		family: {
			mother: 'Jane Smith',
			father: 'Harry Smith',
			sister: 'Samantha Smith'
		},
		age: 35
	},
	{
		name: 'Tom Jones',
		family: {
			mother: 'Norah Jones',
			father: 'Richard Jones',
			brother: 'Howard Jones'
		},
		age: 25
	}
];

for (var {name: n, family: {father: f}} of people) {
	console.log('Name: ' + n + ', Father: ' + f);
}

// "Name: Mike Smith, Father: Harry Smith"
// "Name: Tom Jones, Father: Richard Jones"

// Rest in Object Destructuring
let {a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40}
a; // 10
b; // 20
rest; // { c: 30, d: 40 }

//Computed object property names and destructuring
let key = 'z';
let {[key]: foo} = {z: 'bar'};

console.log(foo); // "bar"