function loadProfiles(userNames){
	let names = typeof userNames !== 'undefined'  ? userNames : [];
	let namesLength = names.length;
	console.log(namesLength);
}

loadProfiles(["Sam","Tyler","Brook","Vivek"]);
loadProfiles(undefined);

//Using Default Parameter Values

function loadMovieCategory(category = []){
	let categoryLength = category.length;
	console.log(categoryLength);
}

loadMovieCategory(["Action","Romance","Horror","Drama","Sci-Fi"]);

loadMovieCategory(); 

loadMovieCategory(undefined);

//The Options Object

//The options object is a widely used pattern that allows user-defined settings to be passed to a function
//in the form of properties on an object.

//Uses Named Parameters
function setPageThread(name, {popular, expires, activeClass} = {}){
	console.log("Name: " + name);
	console.log("Popular: " + popular);
	console.log("Expires: " + expires);
	console.log("Active: " + activeClass);
}


setPageThread("ES2015 With Babel",{
	popular: true,
	expires: 10000,
	activeClass: "is-page-thread"
});

setPageThread("ES2015 - Using let",{
	popular: true
});

setPageThread("ES2015 - Using const");