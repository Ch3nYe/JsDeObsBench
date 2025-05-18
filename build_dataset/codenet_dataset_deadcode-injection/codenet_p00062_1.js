var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
 
var line;
while (line = lines.shift()) {
    var nums = line.split('').map(function(n){return +n;});
    var n = nums.length;
    while (n > 1) {
        var a = [];
        for (var i = 0; i < n - 1; i++) {
            a.push((nums[i] + nums[i+1]) % 10);
        }
        n--;
        nums = a;
    }
    console.log(nums[0]);
}