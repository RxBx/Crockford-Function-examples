// Method Invocation Pattern
//

var myObject = {
	value: 0,
	increment: function(inc) {
		//this ref's base scope of myObject closure, NOT interior 'increment' method
		//such behavior makes 'increment' a public method - obtains 'this' context from object
		this.value += typeof inc === 'number' ? inc : 1;
		console.log(this);
	}
	};

myObject.increment();
console.log(myObject.value);
myObject.increment();
console.log(myObject.value);
myObject.increment();
console.log(myObject.value);
myObject.increment();
console.log(myObject.value);

myObject.increment(2);
console.log(myObject.value);


//Function Invocation Pattern

var add = function (a, b) {
	return a + b;
	console.log(this);//will have global context and isn't useful
};

var sum = add(4, 3);

console.log(sum);

//so using 'that=this' bypasses weak reference to this outside of it's own context

myObject.double = function() {
	var that = this; //

	var helper = function () {
		// allows reference to 'this' upper context of myObject via 'that'
		// not confined to context of 'double' or 'helper'
		that.value = add(that.value, that.value);
	};
		helper();
};


// Constructor Invocation Pattern
// because Quo will be used w. 'new' to create copies, it is a 'constructor' function
// Crockford doesn't like these simple constructors
var Quo = function (string) {
	this.status = string;
};

//you can add new functions to the prototype
Quo.prototype.get_status = function () {
	return this.status;
};

var myQuo = new Quo('confused');

console.log(myQuo.get_status());
//console.log(myQuo.greeting); // would cause Type Error

Quo.prototype.greeting = function () {
	return "Hello."
};

console.log(myQuo.greeting); //now runs

//an alternate form from p 38 doesn't use construction, but DOES keep status private
var quo = function(status) {
	return {
		get_status: function () {
			return status;
		}
	};
};

mySecondQuo = quo("amazed");

console.log(mySecondQuo.get_status());

//Apply Invocation Pattern
//'apply' receives an object for context, then an array of parameters
//null as first parameter means no context change

var array = [3, 4];
var sum = add.apply(null, array);

console.log("sum is "+ sum);

var statusObject = {
	status: 'A-OK'
};
//but here we set a context via 'apply' and feed in statusObject
var status = Quo.prototype.get_status.apply(statusObject);

console.log('status from statusObject via apply invocation '+ status);

//Arguments
//It's possible to make a function that doesn't define total Arguments
//then interior of function makes use of the Arguments
var sumMany = function () {
	var i, sum = 0;
	for (i = 0; i < arguments.length; i +=1) {
		sum += arguments[i];
	}
	return sum;
};

console.log(sumMany(4, 8, 15, 16, 23, 42));