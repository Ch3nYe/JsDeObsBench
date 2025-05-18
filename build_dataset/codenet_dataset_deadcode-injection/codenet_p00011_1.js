function swap(A, a, b) {
	var tmp = A[a-1];
	A[a-1] = A[b-1];
	A[b-1] = tmp;
}
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var w = lines.shift();
var arr = [];
for (var i = 0; i < w; i++) {
	arr.push(i + 1);
}

var n = lines.shift();
for (var i = 0; i < n; i++) {
	var nums = lines.shift().split(',').map(function(i){return +i;});
	swap(arr, nums[0], nums[1]);
}

arr.forEach(function(num) {
	console.log(num);
});