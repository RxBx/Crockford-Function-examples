// global variable for demonstration from
//javascriptissexy.com/javascript-apply-call-and-bind-methods-are-essential-for-javascript-professionals/
var avgScore = "global avgScore";

//global function
function avg (arrayOfScores) {
    // Add all the scores and return the total
    var sumOfScores = arrayOfScores.reduce (function (prev, cur, index, array) {
        return prev + cur;
    });

    // The "this" keyword here will be bound to the global object, unless we set the "this" with Call or Apply
    this.avgScore = sumOfScores / arrayOfScores.length;
    console.log(this); // to show scope in console
}

var gameController = {
    scores  :[20, 34, 55, 46, 77],
    avgScore:null
}

// If we execute the avg function thus, "this" inside the function is bound to the global window object:
avg (gameController.scores);
// Proof that the avgScore was set on the global window object
console.log (window.avgScore); // 46.4
console.log(avg.avgScore);
console.log (gameController.avgScore); // null

// reset the global avgScore
avgScore = "global avgScore";

// To set the "this" value explicitly, so that "this" is bound to the gameController,
// We use the call () method:
avg.call (gameController, gameController.scores); // first arg scope, 2nd is func input/arg

console.log (window.avgScore); //global avgScore - so .call transferred scope off global
console.log (gameController.avgScore); // 46.4 so scope was correctly set to gameController