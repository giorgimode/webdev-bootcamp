var findIndex = function (arr, callback) {
	for (var i = 0; i < arr.length; i++) {
		if (callback(arr[i]) === true) {
			return i;
		}
	}
	return -1;
}


var langs = ["js", "java", "c++"];
var res = findIndex(langs, function (lang) {
	return lang === "java";
})

console.log(res);