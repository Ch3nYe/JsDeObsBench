var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr = input.trim().split("\n");
var n=arr.shift()-0;
var a=[];
for(var i=0;i<n;i++)a.push(arr[i].split(" ").map(Number));
a.sort(function(a,b){
   if(a[0]!=b[0]) return a[0]-b[0];
   else return a[1]-b[1];
});
console.log(a.join("\n").replace(/,/g," "));
