// capitalization of a function is just a convention to mark it as a constructor
// Create a constructor function for a Person, each person should have a firstName, lastName, favoriteColor and favoriteNumber.

function Person(firstName, lastName, favoriteColor, favoriteNumber) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.favoriteColor = favoriteColor;
	this.favoriteNumber = favoriteNumber;
}

// Write a method called multiplyFavoriteNumber that takes in a number and returns the product of the number and the Person's favorite number

function Person(firstName, lastName, favoriteColor, favoriteNumber) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.favoriteColor = favoriteColor;
	this.favoriteNumber = favoriteNumber;
	this.multiplyFavoriteNumber = function (num) {
		return num * this.favoriteNumber;
	}
}

// Given the following code - refactor the Child function to remove all the duplication from the Parent function. You should be able to remove 4 lines of code in the Child function and replace it with 1 single line.
function Parent(firstName, lastName, favoriteColor, favoriteFood) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.favoriteColor = favoriteColor;
	this.favoriteFood = favoriteFood;
}

function Child(firstName, lastName, favoriteColor, favoriteFood) {
	Parent.apply(this, arguments)
	// Parent.call(this, [arguments])
}