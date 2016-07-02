Function.prototype.method = function (name, func) {
	if (!this.prototype[name]) {
		this.prototype[name] = func;
	}
};

String.method('deentityify', function() {
	var entity = {
		quot: '"',
		lt: '<',
		gt: '>'
	};

	return function () {
		return this.replace(/&([^&;]+);/g,
			function (a,b) {
				var r = entity[b];
				return typeof r==='string' ? r: a;
			}
		);
	};
}());//immediately invoked expression

