
//--------------------------------------------------------------------------------------------------------------------
// Default Parameters
function add(a=10, b=20){
	return a+b;
}

add(); // 30
add(20); // 40

//--------------------------------------------------------------------------------------------------------------------
// For of loops
var arr = [1,2,3,4,5];

for(let val of arr){
	console.log(val);
}
// Can't access an index
// Can only be used on data structures with a Symbol.iterator method implemented (no objects!)