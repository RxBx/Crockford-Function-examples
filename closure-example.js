var myObject = function () {
	var value = 0;
	return {
		increment: function (inc) {
			value += typeof inc === 'number' ? inc : 1;
		},
		getValue: function () {
			return value;
		}
	}
}();

console.log(myObject.getValue());

myObject.increment(6);

console.log(myObject.getValue());

myObject.increment('a');

console.log(myObject.getValue());

myObject.increment();

console.log(myObject.getValue());

myObject.increment(true);

console.log(myObject.getValue());

myObject.increment(NaN);

console.log(myObject.getValue());

