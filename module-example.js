Function.prototype.method = function (name, func) {
	if (!this.prototype[name]) {
		this.prototype[name] = func;
	}
};

String.method('deentityify', function() {
	//data in entity is hidden inside the module & is inaccessible outside
	var entity = {
		quot: '"',
		lt: '<',
		gt: '>'
	};

	return function () {
		return this.replace(/&([^&;]+);/g, //still learning regex syntax???, but seeks html entity items btwn '& .. ;''
			//this function will supply the replacement string, based on comp match params w. entity storage items
			function (a,b) { //a=found string; b= regex 'parenthesized submatch string' ([^&;]+)
				var r = entity[b]; //accesses the entity object properties
				return typeof r==='string' ? r : a; //r===string when property exists; otherwise, return w orig match 'a'
			}
		);
	};
}());//immediately invoked expression which "seals" the data & mechanics of the deentityify method



var hello = '"Hi < & bye >';

console.log(hello.deentityify()); //"Hi < & bye >

var bye = '&quot;&gt;&amp;&lt;'

console.log(bye.deentityify()); //">&amp;<