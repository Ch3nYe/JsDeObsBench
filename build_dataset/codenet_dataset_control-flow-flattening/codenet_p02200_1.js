var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr=input.trim().split("\n");
var n=arr.shift()-0;
var a=arr.shift().split(" ").map(Number);
var cnt=0;
for(var i=0;i<n-1;i++){
   if(a[i]<a[i+1])cnt++;
}
console.log(cnt);
