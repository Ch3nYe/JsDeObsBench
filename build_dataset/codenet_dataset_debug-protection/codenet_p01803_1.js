var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr = input.trim().split("\n");
while (true) {
   var n = arr.shift() - 0;
   if (n == 0) break;
   var Arr = arr.splice(0,n);
   var obj = {};
   var max = 0;
   Arr.forEach(function(v){
      var str = v;
      var s = str[0];
      var flag = false;
      for (var i = 0; i < str.length; i++) {
         if (flag) s += str[i];
         flag = (/[aiueo]/.test(str[i])) ? true : false;
      }
      obj[s] = true;
      max = Math.max(max, s.length);
   });
   for (var i = 1; i <= max; i++) {
      var Obj = {};
      for (var key in obj) {
         Obj[key.slice(0, i)] = true;
      }
      if (Object.keys(Obj).length == n) {
         console.log(i);
         break;
      }
      if (i == max) console.log(-1);
   }
}