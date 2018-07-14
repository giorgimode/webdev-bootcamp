/**
 * Until ES2015 - objects were replacements for maps
 * maps implement a Symbol.iterator which means we can use a for...of loop!
 * */

var firstMap = new Map;
firstMap.forEach(v => console.log(v));
firstMap.values(); // MapIterator of values
firstMap.keys(); // MapIterator of keys


var m = new Map;
m.set(1, 'Elie');
m.set(2, 'Colt');
m.set(3, 'Tim');

for(let [key,value] of m.entries()){
	console.log(key, value);
}

// 1 "Elie"
// 2 "Colt"
// 3 "Tim"

//WeakMap
/**
 * Similar to a map, but all keys MUST be objects
 We cannot iterate over weakmap, because Values in a WeakMap can be cleared from memory if there is no reference to them
 More performant than maps, but can not be iterated over.
 * */

//Set
var mySet = new Set([3,1,4,1,2,1,5]); // {3,1,4,2,5}
//sets implement Symbol.iterator so we can use for...of loop
mySet[Symbol.iterator]; // function(){}...
// we can use a for...of loop!
//Set also has a WeakSet. Same rules apply: Similar to a set, but all values MUST be objects