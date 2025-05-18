var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr = input.trim().split("\n");
var nf = arr.shift().split(" ").map(Number);
var f = nf[1];
var obj = {};
arr = arr.map(function(v) {
   v = v.split(" ");
   v.shift();
   v.forEach(function(V) {
      obj[V] = {};
   });
   return v;
});
for (var k in obj) {
   for (var K in obj) {
      obj[k][K] = 0;
   }
}
arr.forEach(function(v) {
   for (var i = 0; i < v.length; i++) {
      for (var j = 0; j < v.length; j++) {
         obj[v[i]][v[j]]++;
      }
   }
});
var ans = [];
for (var k in obj) {
   for (var K in obj) {
      obj[K][k] = 0;
      if (obj[k][K] >= f) {
         ans.push([k, K].sort().join(" "));
      }
   }
}
ans.sort();
console.log(ans.length);
if (ans.length != 0) console.log(ans.join("\n"));