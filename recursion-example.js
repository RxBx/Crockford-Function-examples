
var walk_the_DOM = function walk(node, func) {
	func(node);
	node = node.firstChild;
	while (node) {
		walk(node, func);
		node = node.nextSibling;
	}
};

var getElementsbyAttribute = function (att, value) {
	var results = [];
	walk_the_DOM(document.body, function (node) {
		var actual = node.nodeType ===1 && node.getAttribute(att);
		if (typeof actual === 'string' && (actual === value || typeof value !== 'string')) {
			results.push(node);
		}
	});
	return results;
};