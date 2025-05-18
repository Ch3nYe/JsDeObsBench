var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr=input.trim().split("\n");
var n = arr.shift().split(" ")[0] - 0;
var x = [];
for (var i = 1; i <= n; i++) x.push([i,-1*i]);
arr.forEach(function(v,i) {
   x[v-0-1][1]=i;
});
x.sort(function(a,b){
   return b[1]-a[1];
});
x=x.map(function(v){
   return v[0];
});
console.log(x.join("\n"));