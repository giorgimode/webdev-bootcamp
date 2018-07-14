// Object Rest
/**
 Gather remaining (rest) of keys and values in an object and create a new one out of them
 * */
var instructor = {first:"Elie", last:"Schoppik", job:"Instructor", numSiblings:3};
var {first, last, ...data} = instructor;
first; // "Elie"
last; // "Schoppik"
data; // { job: "Instructor", numSiblings: 3 }

// Object Spread
/** Spread out keys and values from one object to another */
// Great for creating objects starting with default values and is a more concise alternative to Object.assign
var instructor = {first:"Elie", last:"Schoppik", job:"Instructor"};
var instructor2 = {...instructor, first:"Tim", last:"Garcia"};

var defaults = {job: "Instructor", ownsCat:true, ownsDog: true};

var matt = {...defaults, ownsCat: false};
var colt = {...defaults, ownsDog: false};