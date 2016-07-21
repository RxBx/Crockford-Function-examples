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