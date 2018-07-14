// Exponentiation Operator **
//ES2015
var calculatedNumber = Math.pow(2,4);

calculatedNumber; // 16

//ES2016
var calculatedNumber = 2**4;

calculatedNumber; // 16

//==================== [].includes ===========================================
// ES2015
var nums = [1,2,3,4,5];
nums.indexOf(3) > -1; // true
// ES2016
nums.includes(3); // true

// padStart
"awesome".padStart(10); // "   awesome"
"awesome".padStart(10,'!'); // "!!!awesome"

//padEnd
"awesome".padEnd(10,'!'); // "awesome!!!"