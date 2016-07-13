//from http://stackoverflow.com/questions/36314/what-is-currying

function add (a) {
	//console.log("outside function b ");
  return function (b) {
  	//console.log("inside function b " + b );
    return a + b;
  };
}

console.log("running add(3)(4)");
console.log(add(3)(4)); //running 3 returns func, that then uses b as arg

console.log("creating add(3)");
var add3 = add(3); //running 3 creates a func, but preserves 3 as the "a" value inside

console.log("running add3(5)");
console.log(add3(5)); // runs a func that returns 3 + 5 (b)
console.log("running add3()");
console.log(add3()); // creates error