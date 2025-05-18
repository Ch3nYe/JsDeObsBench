var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var n = input.trim() - 0;
var ans = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var i = 0;
while (true) {
   i++;
   var cnt = 0;
   for (var j = i; j >= 1; j--) {
      if (i % j == 0) cnt++;
   }
   if (ans[cnt - 1] == 0) {
      ans[cnt - 1] = i;
      if (!ans.includes(0)) break;
   }
}
console.log(ans[n-1]);
