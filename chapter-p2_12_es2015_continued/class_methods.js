// class methods
//ES5
function Student(firstName, lastName){
	this.firstName = firstName;
	this.lastName = lastName;
}

Student.prototype.sayHello = function(){
	return "Hello " + this.firstName + " " + this.lastName;
}

Student.isStudent = function(obj){
	return obj.constructor === Student;
}

//ES2015
class Student {
	constructor(firstName, lastName){
		this.firstName = firstName;
		this.lastName = lastName;
	}
	sayHello(){
		return `Hello ${this.firstName} ${this.lastName}`;
	}
	static isStudent(obj){
		return obj.constructor === Student;
	}
}