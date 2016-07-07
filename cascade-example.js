getElement('myBoxDiv').
	move(350, 150).
	width(100).
	on('mousedown', function (m) {
		this.startDrag(m, this.getNinth(m));
	}).
	tip('This box is resizeable');