/************** JS NOTES **************
 truthy, falsey values in js.
 Only these values are falsey:
 false
 0 and -0
 "" and ''
 null
 undefined
 NaN
 */
// --------------
// arrays can hold any type of data:
var myArray = [true, 4, "name", null];
---
	array.push() // add at the end
array.pop() // remove the last
array.unshift(value) //add to first
array.shift() //remove first

array.slice(1, 5) // copy array within given indexes
array.slice() // copy of the whole array

array.splice(index, 2) // remove 2 items after index

// ---------------------
// forEach loop:
var myArray = ["one", "two", "three"];
myArray.forEach(function (item) {
	console.log(item);
});

var myArray = ["one", "two", "three"];
myArray.forEach(function (item, i) {
	console.log(item);
	console.log("index is " + i);
});
---------
	/************custom array function:*********/
//1) add new function to prototype
	Array.prototype.myForEach = function (func) {
	for (var i = 0; i < this.length; i++) {
		func(this[i]);
	}
};

//2)
var colors = ["red", "orange", "yellow", "green", "blue", "PURPLE"];
colors.myForEach(function (color) {
	console.log(color);
});
-----------------

	myObject._normalField //-> VALID
myObject.normalField //-> VALID
myObject.notNormalField //-> INVALID
myObject["3notNormalFiel"] //-> VALID
myObject["another abnormalProperty"] //-> VALID

__________________

/**ways to init object:
 1) var person = {}
 2) var person = {
age = 22
};
 3) var person = new Object();*/
---------
// document object as js object in browser
	console.dir(document);
--------
// returns elements in a list if more than one
	document.URL // current url
document.links // all links on page
document.body // whole body
document.head // head
document.getElementById()
document.getElementByClassName()
document.getElementByTagName()

// querySelector does everything as above mentioned but retrieves only 1 element, the first one
document.querySelector("#someId")
document.querySelector(".someClass")
document.querySelector("h1")
document.querySelector("li a.special")

// returns all elements in a list
document.querySelectorAll("h2")
// -------------------------
var p = document.querySelector("p");
p.innerHTML() // --> returns text block including HTML tags
p.textContent //--> returns text block without any HTML tags
// ------------------
/**<a href="http://www.getbootstrap.com" class="btn btn-info btn-lg">Bootstrap Docs</a>*/

var aLink = document.querySelector("a");
aLink.setAttribute("href", "http://www.otherlink.com");
// -----------------
var logo = document.querySelector("#hplogo");
logo.addEventListener("mouseover", function () {
	console.log("WOW YOU ARE HOVERING");
});

// --------------

var giorgi = {
	firstName: "Giorgi",

	calculateNumbers: function (a, b, c) {
		return this.firstName + " just calculated " + (a + b + c);
	},

	sayHello: function (secondName) {
		return "Hello " + this.firstName + " " + secondName;
	}
}

var tatia = {
	firstName: "Tatia"
}

/** first argument to call () sets the this value. Here, it is set to the tatia object. The other arguments after the
 * first argument are passed as parameters to the sayHello () function. */
giorgi.sayHello.call(tatia, "Sikha"); //Hello Tatia Sikha

/** The apply and call methods are almost identical when setting the this value except that you pass the function
 * parameters to apply () as an array, while you have to list the parameters individually to pass them to the call () method.
 * */
giorgi.calculateNumbers.apply(tatia, [1, 2, 3]); //Tatia just calculated 6

var helloFromTatia = giorgi.calculateNumbers.bind(tatia, 1, 5); //does not call method
helloFromTatia(7); //returns 'Tatia just calculated 13'. Equal to giorgi.calculateNumbers.bind(tatia, 1,5,7)
// -----------------
var giorgi = {
	firstName: "Giorgi",

	sayHello: function () {
		setTimeout(function () {
			console.log("Hello " + this.firstName)
		}.bind(this), 1000);
		/**unless we bind this(giorgi) object to the function, setTimeout is called from Window context and
		 this keyword will not refer to giorgi*/
	}
}

giorgi.sayHello();

// --------------------
function Car(color, year) {
	this.color = color;
	this.year = year;
}

function Vehicle(color, year, type) {
	Car.call(this, color, year);
	this.type = type;
}

//alternative
/*function Vehicle(color, year, type) {
    Car.apply(arguments);
    this.type = type;
}*/

var v = new Vehicle("red", 1992, "sp");

// ----------------------------
function Vehicle(make, model, year) {
	this.make = make;
	this.model = model;
	this.year = year;
	this.isRunning = false;
}

Vehicle.prototype.turnOn = function () {
	this.isRunning = true;
}

Vehicle.prototype.turnOff = function () {
	this.isRunning = false;
}

Vehicle.prototype.honk = function () {
	return this.isRunning ? "beep" : null;
}

/**
 * to create fields not shared by objects created from Vehicle constructor, add them to constructor
 * e.g. make, model, year, isRunning
 * To create functions shared by objects, add them to prototype
 * */
// --------------------
// closures
function outer() {
	var outerData = "are awesome";
	return function () {
		var innerData = "Closures really ";
		return innerData + outerData;
	}
}

//private variables

function counter() {
	var c = 0;
	return function () {
		return ++c;
	};
}

var cc = counter();
cc(); // increments by one on each call

//------------------------------------

// Event loops
function square(n) {
	return n * n;
}

setTimeout(function () {
	console.log("Callback is placed",
		"on the queue");
}, 0);
console.log(square(2));

// Output:
// 4
// Callback is placed on the queue


/**
 * If a function calls another function, they are placed on top of each other. but if any function in the stack makes
 * a request of puts a timeout, the whole stack does not get frozen. Instead "freezing" function is placed on the event
 * queue or event table. Every time you call a setTimeout function or you do some async operation — it is added to the
 * Event Table. This is a data structure which knows that a certain function should be triggered after a certain event.
 * Once that event occurs (timeout, click, mouse move) it sends a notice. Bear in mind that the Event Table does not
 * execute functions and does not add them to the call stack on it’s own. It’s sole purpose is to keep track of events
 * and send them to the Event Queue. Event Queue kind of stores the correct order in which the functions should be
 * executed. It receives the function calls from the Event Table, but it needs to somehow send them to the Call Stack?
 * This is where the Event Loop comes in.
 *  Event Loop is a constantly running process that checks if the call stack is empty.
 * Queue is an ordered list of functions waiting to be placed on the stack (FIFO)
 * Event loop is called when stack is emptied. IF queue is empty, front of the queue is placed in the stack
 * A JavaScript runtime uses a message queue, which is a list of messages to be processed. Each message has an
 * associated function which gets called in order to handle the message. At some point during the event loop,
 * the runtime starts handling the messages on the queue, starting with the oldest one. To do so, the message
 * is removed from the queue and its corresponding function is called with the message as an input parameter.
 * As always, calling a function creates a new stack frame for that function's use. The processing of functions
 * continues until the stack is once again empty; then the event loop will process the next message in the queue
 * (if there is one).
 * */
