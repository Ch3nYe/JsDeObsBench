var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr = input.trim().split("\n");
while (true) {
   var n = arr.shift() - 0;
   if (n == 0) break;
   var nww = [];
   for (var i = 0; i < n; i++) nww[i] = arr.shift().split(" ");
   nww = nww.map(v => [v[0], v[1] - 0, v[2] - 0]);
   nww.sort((a,b)=>{
      return b[1]-a[1];
   });
   var max = 0;
   var ans = "";
   var bomb = function (strA, strB, sum, g) {
      if (strB.length == 0) {
         if (max < g ) {
            ans = strA;
            max = g ;
         }
         return;
      }
      for(var i=0;i<strB.length;i++){
         var v=strB[i];
         if (sum <= nww[v][2]) {
            var a = strA+v;
            var b = strB.replace(v,"");
            bomb(a, b, sum + nww[v-0][1], g + nww[v-0][1] * (strA.length + 1));
         }
      }
   };
   var str = "";
   for (var i = 0; i < n; i++) str+=i;
   bomb("", str, 0, 0);
   console.log(ans.split("").map(v => nww[v-0][0]).reverse().join("\n"));
}
