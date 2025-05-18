var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr = input.trim().split("\n");
while (true) {
   var n = arr.shift() - 0;
   if (n == 0) break;
   var nww = [];
   for (var i = 0; i < n; i++) nww[i] = arr.shift().split(" ");
   nww = nww.map(v => [v[0], v[1] - 0, v[2] - 0]);
   var max = 0;
   var ans = [];
   var bomb = function (arrA, arrB, sum, g) {
      if (arrB.length == 0) {
         if (max < g / sum) {
            ans = arrA;
            max = g / sum;
         }
         return;
      }
      arrB.forEach(v => {
         if (sum <= nww[v][2]) {
            var a = arrA.concat(v);
            var b = arrB.slice().filter(n => v != n);
            var c = sum + nww[v][1];
            var d = g + nww[v][1] * (arrA.length + 1);
            bomb(a, b, c, d);
         }
      });
   };
   var bombArr = [];
   for (var i = 0; i < n; i++) bombArr.push(i);
   bomb([], bombArr, 0, 0);
   console.log(ans.map(v => nww[v][0]).reverse().join("\n"));
}

