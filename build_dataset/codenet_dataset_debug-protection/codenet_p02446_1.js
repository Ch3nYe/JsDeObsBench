var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr = input.trim().split("\n");
var n=arr.shift()-0;
var a=arr.shift().split(" ").map(Number);
var b=[];
var memo="";
for(var i=0;i<a.length;i++){
   if(a[i]!==memo)b.push(a[i]);
   memo=a[i];
}
console.log(b.join(" "));
