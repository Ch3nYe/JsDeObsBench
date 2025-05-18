var input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();
var nums = input.split(' ').map(function(num){return +num;});
var n = nums[0];
var m = nums[1];

var mod = 1;
for (var i = 0; i < m; i++) {
    mod = (mod * n) % 1000000007;
}

console.log(mod);