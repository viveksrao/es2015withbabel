import FlashMessage from "./flash-message";

let flash = new FlashMessage("Gulp, Babel and Browserify");

flash.display();

let message = "web forum";

function printInCaps(value){
  let message = value.toUpperCase();
  return message;
}

printInCaps("profiles");

console.log(message);


function loadProfiles(userNames = []){
  let namesLength = userNames.length;
  console.log(namesLength);
}


loadProfiles(['John','Jane','Jim']);
loadProfiles();
loadProfiles(undefined);


function setPageThread(name,{popular, expires, activeClass} = {}){
  console.log("Name: " + name);
  console.log("Popular: " + popular);
  console.log("Expires: " + expires);
  console.log("Active: " + activeClass);
}

setPageThread("New Version out Soon!",{
  popular: true,
  expires: 10000,
  activeClass: "is-page-thread"
});

setPageThread("ES2015 With Babel and Gulp",{
  popular: true
});

setPageThread("Ruby on Rails");


let printName = (value) => {
  console.log(value);
}

printName('Vivek');

function buildUser(firstName, lastName){
  let fullName = firstName + " " + lastName;
  return {firstName,lastName,fullName}
}

let user = buildUser("Arya","Stark");
console.log(user.firstName);
console.log(user.lastName);
console.log(user.fullName);


let name = "Tyrion";
let age = 40;
let friends = ["Daenerys","Lord Varys"];

let actor = {name, age, friends};

console.log(actor.name);
console.log(actor.age);
console.log(actor.friends);

let {firstName, lastName} = buildUser("Petyr","Baelish");
// let {firstName, lastName, fullName} = buildUser("Petyr","Baelish");
console.log(firstName);
console.log(lastName);
// console.log(fullName);
