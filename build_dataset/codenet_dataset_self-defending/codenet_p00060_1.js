var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
Arr.forEach(function(v){
   var arr=v.split(" ").map(Number);
   var m=[1,2,3,4,5,6,7,8,9,10];
   m=m.filter(function(v){return (v!=arr[0] || v!= arr[1] || v!=arr[2]);});
   var y=0;
   var n=0;
   m.forEach(function(v){((arr[0]+arr[1]+v)<=20)?y++:n++;});
   console.log(y>=n?"YES":"NO");
});