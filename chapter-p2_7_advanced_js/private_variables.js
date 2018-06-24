/**
 * In other languages, there exists support for variables that can not be modified externally. We call those private
 * variables, but in JavaScript we don't have that built in. No worries - closures can help!
 * */
function counter(){
	var count = 0;
	return function(){
		count++;
		return count;
	}
}

var counter1 = counter();
counter1(); // 1
counter1(); // 2

var counter2 = counter();
counter2(); // 1
counter2(); // 2

counter1(); // 3 this is not affected by counter2!

count; // ReferenceError: count is not defined - because it is private!



function classRoom(){
	var instructors = ["Elie", "Colt"];
	return {
		getInstructors: function(){
			return instructors.slice();  // if instructors array is returned, it can be modified externally
		},
		addInstructor: function(instructor){
			instructors.push(instructor);
			return instructors.slice();
		}
	}
}

var course1 = classRoom();
course1.getInstructors().pop(); // ["Colt"]
course1.getInstructors().pop(); // "Colt"
course1.getInstructors(); // ["Colt", "Elie"]

// now the instructors variable is truly private
// you're stuck with Colt and Elie...for good!

