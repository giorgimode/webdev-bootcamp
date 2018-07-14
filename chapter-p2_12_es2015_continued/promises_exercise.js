
/**
 * 1. Write a function called getMostFollowers, which accepts a variable number of arguments. You should then make
 * an AJAX call to the Github User API (https://developer.github.com/v3/users/#get-a-single-user) to get the name and
 * number of followers of each argument. The function should return a promise, which when resolved, returns a string
 * which displays the username who has the most followers.

 Hint - Try to use Promise.all to solve this and remember that the jQuery AJAX methods ($.getJSON, $.ajax, etc.)
 return a promise.

 * 2. Write a function called starWarsString, which accepts a number. You should then make an AJAX call to the Star
 * Wars API (https://swapi.co/ ) to search for a specific character by the number passed to the function. Your
 * function should return a promise that when resolved will console.log the name of the character.
 *
 *
 * Bonus 1 -  Using the data from the previous AJAX call above, make another AJAX request to get the first film that
 * character is featured in and return a promise that when resolved will console.log the name of the character and the
 * film they are featured in
 *
 * Bonus 2 -  Using the data from Bonus 1 - make another AJAX call to get the information about the first planet that
 * the film contains. Your function should return a promise that when resolved will console.log the name of the
 * character and the film they are featured in and the name of the planet.
 * */

function getMostFollowers(...usernames){
	let baseUrl = "https://api.github.com/users/"
	let urls = usernames.map(username => $.getJSON(baseUrl + username));
	return Promise.all(urls).then(data => {
		let max = data.sort((a,b) => a.followers < b.followers)[0];
		return `${max.name} has the most followers with ${max.followers}`
	})
}
function starWarsString(id){
	var str = '';
	return $.getJSON(`https://swapi.co/api/people/${id}/`).then(data => {
		str += `${data.name} is featured in `;
		var filmData = data.films[0]
		return $.getJSON(filmData);
	}).then(res => {
		str += `${res.title}, directed by ${res.director} `;
		var planetData = res.planets[0];
		return $.getJSON(planetData)
	}).then(res => {
		str += `and it takes place on ${res.name}`;
		return str;
	}).then(function(finalString){
		return finalString
	})
}