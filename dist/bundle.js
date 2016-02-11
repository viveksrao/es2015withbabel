(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _flashMessage = require("./flash-message");

var _flashMessage2 = _interopRequireDefault(_flashMessage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var flash = new _flashMessage2.default("Gulp, Babel and Browserify");

flash.display();

// The loadProfiles function takes an array of users and adds their profile to the sidebar.
function loadProfiles(userNames) {
  if (userNames.length > 3) {
    var loadingMessage = "This might take a while...";
    _displaySpinner(loadingMessage);
  } else {
    var flashMessage = "Loading Profiles";
    _displayFlash(flashMessage);
  }
  for (var i in userNames) {
    _fetchProfile("/users/" + userNames[i], function () {
      console.log("Fetched for" + userNames[i]);
    });
  }
}

function _displayFlash(flashMessage) {}

function _fetchProfile(userName) {
  console.log(userName);
}

// let message = "web forum";
//
// function printInCaps(value){
//   let message = value.toUpperCase();
//   return message;
// }
//
// printInCaps("profiles");
//
// console.log(message);

// function loadProfiles(userNames = []){
//   let namesLength = userNames.length;
//   console.log(namesLength);
// }

loadProfiles(['John', 'Jane', 'Jim']);
// loadProfiles();
// loadProfiles(undefined);

// function setPageThread(name,{popular, expires, activeClass} = {}){
//   console.log("Name: " + name);
//   console.log("Popular: " + popular);
//   console.log("Expires: " + expires);
//   console.log("Active: " + activeClass);
// }

// setPageThread("New Version out Soon!",{
//   popular: true,
//   expires: 10000,
//   activeClass: "is-page-thread"
// });
//
// setPageThread("ES2015 With Babel and Gulp",{
//   popular: true
// });
//
// setPageThread("Ruby on Rails");
//
//
// let printName = (value) => {
//   console.log(value);
// }
//
// printName('Vivek');
//
// function buildUser(firstName, lastName){
//   let fullName = firstName + " " + lastName;
//   return {firstName,lastName,fullName}
// }
//
// let user = buildUser("Arya","Stark");
// console.log(user.firstName);
// console.log(user.lastName);
// console.log(user.fullName);

// let name = "Tyrion";
// let age = 40;
// let friends = ["Daenerys","Lord Varys"];
//
// let actor = {name, age, friends};
//
// console.log(actor.name);
// console.log(actor.age);
// console.log(actor.friends);
//
// let {firstName, lastName} = buildUser("Petyr","Baelish");
// let {firstName, lastName, fullName} = buildUser("Petyr","Baelish");
// console.log(firstName);
// console.log(lastName);
// console.log(fullName);

},{"./flash-message":2}],2:[function(require,module,exports){
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FlashMessage = (function () {
  function FlashMessage(message) {
    _classCallCheck(this, FlashMessage);

    this.message = message;
  }

  _createClass(FlashMessage, [{
    key: "display",
    value: function display() {
      alert(this.message);
    }
  }]);

  return FlashMessage;
})();

exports.default = FlashMessage;

},{}]},{},[1]);
