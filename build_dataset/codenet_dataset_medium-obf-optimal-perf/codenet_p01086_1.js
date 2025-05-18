var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr = input.trim().split("\n");
while (true) {
   var n = arr.shift() - 0;
   if (n == 0) break;
   var Arr = arr.splice(0, n);
   Arr = Arr.map(function(v) {
      return v.length;
   });
   for (var i = 0; i < Arr.length; i++) {
      var good = [5, 7, 5, 7, 7];
      var sum = 0;
      for (var j = i; j < Arr.length; j++) {
         if (good.length == 0) break;
         sum += Arr[j];
         if (good[0] > sum) continue;
         else if (good[0] < sum) break;
         else if (good[0] == sum) {
            good.shift();
            sum = 0;
         }
      }
      if (good.length == 0) {
         console.log(i + 1);
         break;
      }
   }
}