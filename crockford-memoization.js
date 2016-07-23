var memoizer = function (memo, fundamental) {
	var shell = function (n) {
		var result = memo[n];
		if (typeof result !== 'number') {
			result = fundamental(shell, n);
			memo[n] = result;
		}
		return result;
	};
};

var simpleFibonacci = function(n) {
	return n < 2 ? n : simpleFibonacci(n-1) + simpleFibonacci(n-2);
};

var fibonacci = memoizer([0,1], simpleFibonacci)

//Example Addy Osmani
Function.prototype.memoize = function(){
    var self = this, cache = {};
    return function( arg ){
      if(arg in cache) {
        console.log('Cache hit for '+arg);
        return cache[arg];
      } else {
        console.log('Cache miss for '+arg);
        return cache[arg] = self( arg );
      }
    }
  }
  
  // a hypothetical usage example

// imagine having a function, fooBar, as follows
function fooBar(a){ return ""+a}
// once a memoizer is available, usage is as simple as
// applying it to our function as follows:
var memoFooBar = fooBar.memoize();
// note in other implems, this would probably be
// memoize(fooBar);
// we now use memFooBar for all calls to the original
// function, which will now go through the memoizer instead.
memoFooBar(1);
// the above call isn't cached, so any computations necessary
// are conducted. This result is then cached for next time.
memoFooBar(1); // will now return the cached result
memoFooBar(2); // whilst this will need to be calculated
memoFooBar(3);
memoFooBar(2);
memoFooBar(3);

//more thorough Addy Osmani
function memoize( fn ) {
    return function () {
        var args = Array.prototype.slice.call(arguments),
            hash = "",
            i = args.length;
        currentArg = null;
        while (i--) {
            currentArg = args[i];
            hash += (currentArg === Object(currentArg)) ?
            JSON.stringify(currentArg) : currentArg;
            fn.memoize || (fn.memoize = {});
        }
        return (hash in fn.memoize) ? fn.memoize[hash] :
        fn.memoize[hash] = fn.apply(this, args);
    };
}

var simpleFibonacci = function(n) {
	return n < 2 ? n : simpleFibonacci(n-1) + simpleFibonacci(n-2);
};

var fibbonacciMemod = memoize(simpleFibonacci);

console.log(fibbonacciMemod(10));

var square = function(z) {
	console.log(z*z);
	return z*z;
};

var squareMemod = memoize(square);

console.log("first time "+squareMemod(7));
console.log("now again" + squareMemod(7));
console.log("now again" + squareMemod(7));
console.log("first time "+squareMemod(6));
console.log("now again" + squareMemod(6));
console.log("now again" + squareMemod(7));
