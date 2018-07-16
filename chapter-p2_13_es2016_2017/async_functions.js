// The purpose of async functions is to simplify writing asynchronous code, specifically Promises.

async function first(){
	return "We did it!";
}

first(); // returns a promise

first().then(val => console.log(val)); // "We did it!"


/**
 await - A reserved keyword that can only be using inside async functions

 await pauses the execution of the async function and is followed by a Promise.
 The await keyword waits for the promise to resolve, and then resumes the async function's execution and returns
 the resolved value

 Think of the await keyword like a pause button (similar to yield with generators)
 * */

//No .then or callback or yield necessary!
async function getMovieData(){
	console.log("starting!");
	var movieData = await $.getJSON('https://omdbapi.com?t=titanic&apikey=thewdb');
	// this line does NOT run until the promise is resolved!
	console.log("all done!");
	console.log(movieData);
}

getMovieData() // logs an object with data about the movie!

// We can also place async functions as class methods
class MovieData {
	constructor(name){
		this.name = name;
	}
	async getMovie(){
		var response = await $.getJSON(`https://omdbapi.com?t=${this.name}&apikey=thewdb`);
		console.log(response);
	}
}

var movieCollector = new MovieData('shrek');
movieCollector.getMovie();

// error handling
async function getUser(user){
	try {
		var response = await $.getJSON(`https://api.github.com/users/${user}`);
		console.log(response.name);
	} catch(e){
		console.log("User does not exist!");
	}
}

//==============================================================================================================
// SEQUENTIAL NOT PARALLEL, problematic
//The second HTTP request does not get made until the first promise is resolved. This can really slow down our applications
async function getMovieData(){
	var responseOne = await $.getJSON(`https://omdbapi.com?t=titanic&apikey=thewdb`);
	var responseTwo = await $.getJSON(`https://omdbapi.com?t=shrek&apikey=thewdb`);
	console.log(responseOne);
	console.log(responseTwo);
}

getMovieData();

// MUCH FASTER!
async function getMovieData(){
	var titanicPromise = $.getJSON(`https://omdbapi.com?t=titanic&apikey=thewdb`);
	var shrekPromise = $.getJSON(`https://omdbapi.com?t=shrek&apikey=thewdb`);

	var titanicData = await titanicPromise;
	var shrekData = await shrekPromise;

	console.log(titanicData);
	console.log(shrekData);
}

getMovieData();

//==============================================================================================================
// We can use Promise.all to await multiple resolved promises
async function getMovieData(first, second){
	var moviesList = await Promise.all([
		$.getJSON(`https://omdbapi.com?t=${first}&apikey=thewdb`),
		$.getJSON(`https://omdbapi.com?t=${second}&apikey=thewdb`)
	]);
	console.log(moviesList[0].Year);
	console.log(moviesList[1].Year);
}

getMovieData('shrek', 'blade');

// 2001
// 1998
