var add_the_handlers = function(nodes) {
	var i;
	for (i = 0; i <nodes.length; i += 1) {
		nodes[i].onclick = function	(i) {
			return function (e) {
				alert (i);
			};
		}(i);
	}
};

//used in tandem w code from recursion-example.js, this allows you
//to select some nodes, than add a clickable alert

items = getElementsbyAttribute('class','yes');

add_the_handlers(items);