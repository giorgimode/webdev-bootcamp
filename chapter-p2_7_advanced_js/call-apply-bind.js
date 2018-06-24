/**
 Call    thisArg,a,b,c,d,...
 Apply    thisArg,[a,b,c,d,...]
 Bind    thisArg,a,b,c,d,...   //not invoked immediately
 * */

/** --------Call----------------------*/
// select all the 'divs' on a page with  text containing word "Dracarys"
var divs = document.getElementsByTagName('divs');

/*
we could use 'filter' function from arrays, but unforunately divs variable is not an array, but an array-like-object:
divs.filter // undefined
we need to convert it to array
use the slice method on arrays, but instead of the target of slice (the keyword this) being that array,
	let's set the target of the keyword `this` to be our divs array-like-object.
	*/
var divsArray = [].slice.call(divs);
// you might also see this as Array.prototype.slice.call(divs)
// they do the same thing
divsArray.filter(function (val) {
	return val.innerText === 'Hello';
});

/*
* What we are doing is trying to slice something that is not actually an array! In JavaScript, slice will not work
* on all data types, but it works very well on array-like-objects
* */

/** --------APPLY----------------------*/
// When a function does not accept an array, apply will spread out values in an array for us!

var nums = [5,7,1,4,2];

Math.max(nums); // NaN
Math.max.apply(this, nums); // 7

/** --------BIND----------------------*/
function addNumbers(a,b,c,d){
	return this.firstName + " just calculated " + (a+b+c+d);
}

var elie = {
	firstName: "Elie"
}

// With bind - we do not need to know all the arguments up front!
var elieCalc = addNumbers.bind(elie,1,2); // function(){}...
elieCalc(3,4); // Elie just calculated 10


// Very commonly we lose the context of 'this', but in functions that we do not want to execute right away!
//inside setTimeout this refers to global variable
var colt = {
	firstName: "Colt",
	sayHi: function(){
		setTimeout(function(){
			console.log("Hi " + this.firstName);
		},1000);
	}
}
colt.sayHi(); // Hi undefined (1000 milliseconds later)

var colt = {
	firstName: "Colt",
	sayHi: function(){
		setTimeout(function(){
			console.log("Hi " + this.firstName);
		}.bind(this),1000);
	}
}

colt.sayHi(); // Hi Colt (1000 milliseconds later)