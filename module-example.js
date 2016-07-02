String.method('deentityify', function() {
	var entitity = {
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
}());