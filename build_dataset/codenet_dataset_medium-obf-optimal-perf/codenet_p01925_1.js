var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr = input.trim().split("\n");
while (true) {
   if (arr[0] == "0 0") break;
   var nm = arr.shift().split(" ").map(Number);
   var point = [];
   for (var i = 0; i < nm[0]; i++) point[i] = [0, 0];
   for (var i = 0; i < nm[1]; i++) {
      var c = arr.shift().split(" ").map(Number);
      var s = c.shift();
      var k = c.shift();
      if (k == 1) point[c[0] - 1][0] += s;
      c.forEach(function(v, i) {
         point[v - 1][1] += s;
      });
   }
   var max = 0;
   for (var i = 0; i < nm[0]; i++) {
      for (var j = 0; j < nm[0]; j++) {
         if (i == j) continue;
         max = Math.max(max, point[i][1] - point[j][0]);
      }
   }
   console.log(max + 1);
}