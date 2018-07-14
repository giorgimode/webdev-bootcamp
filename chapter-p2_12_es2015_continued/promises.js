function displayAtRandomTime() {
	return new Promise((resolve, reject) =>
		setTimeout(() => {
			if (Math.random() > .5) {
				resolve('Yes!');
			} else {
				reject('No!');
			}
		}, 1000));
}

/**
 * The returned value from a promise will always contain a .then and .catch method which are functions to be executed
 * when the promise is resolved or rejected
 *
 * */

displayAtRandomTime()
	.then(value => console.log(value))
	.catch(error => console.log(error));

// ------------------------------------------------------------------------------------------------------------
/**
 * Promise.all
 1. Accepts an array of promises and resolves all of them or rejects once a single one of the promises has been first
 rejected (fail fast).
 2. If all of the passed-in promises fulfill, Promise.all is fulfilled with an array of the values from the passed-in
 promises, in the same order as the promises passed in.
 3. The promises don't resolve sequentially, but Promise.all waits for them

 You may have seen something like this when $.when in jQuery or Q
 * */

function getMovie(title) {
	return $.getJSON(`https://omdbapi.com?t=${title}&apikey=thewdb`);
}

let titanicPromise = getMovie('titanic');
let shrekPromise = getMovie('shrek');
let braveheartPromise = getMovie('braveheart');

Promise.all([titanicPromise, shrekPromise, braveheartPromise])
	.then(movies => movies.forEach(value => console.log(value.Year)));

// 1997
// 2001
// 1995