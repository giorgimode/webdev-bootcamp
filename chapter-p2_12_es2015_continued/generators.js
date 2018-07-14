/**
 A special kind of function which can pause execution and resume at any time
 Created using a *
 When invoked, a generator object is returned to us with the keys of value and done.
 Value is what is returned from the paused function using the yield keyword
 Done is a boolean which returns true when the function has completed

 * */

function* pauseAndReturnValues(num){
	for(let i = 0; i < num; i++){
		yield i;
	}
}

var gen = pauseAndReturnValues(5);

gen.next(); // {value: 0, done: false}
gen.next(); // {value: 1, done: false}
gen.next(); // {value: 2, done: false}
gen.next(); // {value: 3, done: false}
gen.next(); // {value: 4, done: false}
gen.next(); // {value: undefined, done: true}

//======================================================================================================

function* printValues(){
	yield "First";
	yield "Second";
	yield "Third";
}

var g = printValues();
g.next().value; // "First"
g.next().value; // "Second"
g.next().value; // "Third"

// Since generators implement a Symbol.iterator property we can use a for...of loop!
function* pauseAndReturnValues(num){
	for(let i = 0; i < num; i++){
		yield i;
	}
}

for(val of pauseAndReturnValues(3)){
	console.log(val);
}

// 0
// 1
// 2

// We can use generators to pause asynchronous code! $.getJSON returns a promise
function* getMovieData(movieName){
	console.log('starting')
	yield $.getJSON(`https://omdbapi.com?t=${movieName}&apikey=thewdb`);
	console.log('ending')
}

var movieGetter = getMovieData('titanic');
movieGetter.next().value.then(val => console.log(val));