
var walk_the_DOM = function walk(node, func) {
	func(node); //performs function on node
	node = node.firstChild; //resets node one level down
	while (node) {
		walk(node, func); //re runs function on that next level down... keeps going down!
		node = node.nextSibling; //tries to skip to next sibling if any... and returns to 'while'
	} //IF no sibling, loop ends, and action reverts to prior (higher) level... recursion!
};

var getElementsbyAttribute = function (att, value) {
	var results = [];
	walk_the_DOM(document.body, function (node) {
		var actual = node.nodeType ===1 && node.getAttribute(att); //clever code that differentiates
		//between non-element nodes (1s) & text attributes. Returns text only when node is 1 & attribute is text/string value
		if (typeof actual === 'string' && (actual === value || typeof value !== 'string')) {
			//then IF actual is a string(value) AND it equals value you are searching (or value is not a string), pushes into results.
			results.push(node);
		}
	});
	return results;
};