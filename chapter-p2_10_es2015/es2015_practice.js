// const
const name = "Giorgi";
var name = "Tatia"; // syntax Error
// -----
var fruit = "apple";
const fruit = "pear"; // syntax error, already declared
//---------------

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