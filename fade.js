//color JS code to demo closure

var fade = function (node) {
	var level = 1;
	console.log("print this on fade run");
	var step = function () {
		var hex = level.toString(16);
		node.style.backgroundColor = '#ffff' + hex + hex;
		console.log("I'm running step now on");
		console.log(node);
		if (level < 15) { //loop thru till max hex value
			level += 1;
			setTimeout(step, 100);
		}
	};
	setTimeout(step, 100);//initial call
};

fade(document.body);