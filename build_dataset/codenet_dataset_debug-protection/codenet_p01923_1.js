var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr = input.trim().split("\n");
while (true) {
   if (arr[0] == "0 0") break;
   var nm = arr.shift().split(" ").map(Number);
   var n = nm[0];
   var m = nm[1];
   var max = [];
   for (var i = 0; i < m; i++) max[i] = 0;
   for (var i = 0; i < n; i++) {
      var dv = arr.shift().split(" ").map(Number);
      var d = dv[0] - 1;
      var v = dv[1];
      if (max[d] < v) max[d] = v;
   }
   var sum = 0;
   for (var i = 0; i < m; i++) sum += max[i];
   console.log(sum);
}