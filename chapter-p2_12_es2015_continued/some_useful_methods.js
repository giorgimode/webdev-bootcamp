// ES2015
// Object.assign copies the object. Mind the empty object as first parameter. Without it simple reference will be created
var teacher = {name: "Elie"};
var anotherTeacher = Object.assign({},o);

anotherTeacher.name = "Tim";
teacher.name; // "Elie"


// however, objects.assign does not do deep cloning. If we have objects inside of the object we are copying - those still have a reference!
// ES2015

var instructor = {instructors: ["Elie", "Tim"]};
var otherInstructor = Object.assign({},o);

otherInstructor.instructors.push("Colt");

instructor.instructors; // ["Elie", "Tim", "Colt"];


// Convert other data types into arrays
//ES5
var divs = document.getElementsByTagName("div"); // returns an array-like-object
var converted = [].slice.call(divs) // convert the array-like-object into an array

//ES2015
//Convert array-like-objects into arrays
var divs = document.getElementsByTagName("div");
var converted = Array.from(divs);

//Convert different types of objects into arrays. E.g. set into array
var firstSet = new Set([1,2,3,4,3,2,1]); // {1,2,3,4}

var arrayFromSet = Array.from(firstSet); // [1,2,3,4]

// =============================================Other array methods=================================
/**
 array.find
 accepts a callback with value, index and array (just like forEach, map, filter, etc.).
 Returns the value found or undefined if not found
 * */
var instructors = [{name: "Elie"}, {name: "Matt"}, {name: "Tim"}, {name: "Colt"}];

instructors.find(val => val.name === "Tim"); // {name: "Tim"}

//findIndex:  Similar to find, but returns an index or -1 if the value is not found

//includes returns a boolean if a value is in a string - easier than using indexOf
//ES5
"awesome".indexOf("some") > -1 // true
//ES2015
"awesome".includes("some"); // true

//A handy way for handling NaN being a typeof number
// ES2015
function seeIfNumber(val){
	if(Number.isFinite(val)){
		return "It is a number!";
	}
}