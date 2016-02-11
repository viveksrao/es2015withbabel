"use strict";

function loadProfiles(userNames) {
	var names = typeof userNames !== 'undefined' ? userNames : [];
	var namesLength = names.length;
	console.log(namesLength);
}

loadProfiles(["Sam", "Tyler", "Brook", "Vivek"]);
loadProfiles(undefined);

//Using Default Parameter Values

function loadMovieCategory() {
	var category = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

	var categoryLength = category.length;
	console.log(categoryLength);
}

loadMovieCategory(["Action", "Romance", "Horror", "Drama", "Sci-Fi"]);

loadMovieCategory();

loadMovieCategory(undefined);

//The Options Object

//The options object is a widely used pattern that allows user-defined settings to be passed to a function
//in the form of properties on an object.

//Uses Named Parameters
function setPageThread(name) {
	var _ref = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	var popular = _ref.popular;
	var expires = _ref.expires;
	var activeClass = _ref.activeClass;

	console.log("Name: " + name);
	console.log("Popular: " + popular);
	console.log("Expires: " + expires);
	console.log("Active: " + activeClass);
}

setPageThread("ES2015 With Babel", {
	popular: true,
	expires: 10000,
	activeClass: "is-page-thread"
});

setPageThread("ES2015 - Using let", {
	popular: true
});

setPageThread("ES2015 - Using const");

