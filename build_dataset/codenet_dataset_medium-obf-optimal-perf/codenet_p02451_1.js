var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr = input.trim().split("\n");
var n=arr.shift()-0;
var a=arr.shift().split(" ");
var myMap = new Map();
for(var i=0;i<n;i++){
   myMap.set(a[i], 0);
}
var q=arr.shift();
var s="";
for(var i=0;i<q;i++){
   s+=((myMap.has(arr[i]))?1:0)+"\n";
}
console.log(s.trim());
