/** Keyword 'new' does the following:
 1. Creates an object out of thin air
 2. Assigns the value of 'this' to be that object
 3. Adds 'return this' to the end of the function
 4. Creates a link (which we can access as __proto__) between the object created and the prototype property of the constructor function
 * */

/**
 *
 1. Every constructor function has a property on it called "prototype", which is an object
 2. The prototype object has a property on it called "constructor", which points back to the constructor function
 3. Anytime an object is created using the 'new' keyword, a property called "__proto__" gets created, linking the object
 and the prototype property of the constructor function
 * */