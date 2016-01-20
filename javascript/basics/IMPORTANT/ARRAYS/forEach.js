// =========
// VERSION 1
// =========
function myForEach(arr, func){
	for (var i = 0; i < arr.length; i++) {
		func(arr[i]);
	}
}
var colors = ["red", "orange", "yellow", "green", "blue", "PURPLE"];
myForEach(colors, function(color){
	console.log(color);
});

// =========
// VERSION 2 
// =========
Array.prototype.myForEach = function(func){
  for(var i = 0; i < this.length; i++) {
   func(this[i])
  }
}

var colors = ["red", "orange", "yellow", "green", "blue", "PURPLE"];
colors.forEach(function(color){
	console.log(color);
});