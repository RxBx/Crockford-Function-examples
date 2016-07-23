
this.x = 5; 
console.log(x);
var module = {
  x: 81,
  getX: function() { return this.x; }
};



module.getX(); // 81
console.log("module.getX(): "+module.getX());

var retrieveX = module.getX;
retrieveX();   
console.log("retrieveX(): "+retrieveX());
// returns 5 - The function gets invoked at the global scope

// Create a new function with 'this' bound to module
// New programmers might confuse the
// global var x with module's property x
var boundGetX = retrieveX.bind(module);

boundGetX(); // 81

console.log("boundGetX(): "+boundGetX());

var object2 = {
  x: 7
};

var boundGetX2 = retrieveX.bind(object2);

boundGetX2(); // 81

console.log("boundGetX2(): "+boundGetX2());


function greet (gender, age, name) {
    // if a male, use Mr., else use Ms.
    var salutation = gender === "male" ? "Mr. " : "Ms. ";

    if (age > 25) {
        return "Hello, " + salutation + name + ".";
    }
    else {
        return "Hey, " + name + ".";
    }
}
// So we are passing null because we are not using the "this" keyword in our greet function.
var greetAnAdultMale = greet.bind (null, "male", 45);

greetAnAdultMale ("John Hartlove"); // "Hello, Mr. John Hartlove."

var greetAYoungster = greet.bind (null, "", 16);

greetAYoungster ("Alex"); // "Hey, Alex."

greetAYoungster ("Emma Waterloo"); // "Hey, Emma Waterloo."

console.log(greetAYoungster ("Emma Waterloo"));