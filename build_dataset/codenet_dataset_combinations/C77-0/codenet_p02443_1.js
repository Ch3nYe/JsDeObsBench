var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr = input.trim().split("\n");
var n=arr.shift()-0;
var a=arr.shift().split(" ").map(Number);
var q=arr.shift()-0;
var s="";
for(var i=0;i<q;i++){
   var [b,e]=arr[i].split(" ").map(Number);
   var x=a.slice(0,b);
   var y=a.slice(b,e).reverse();
   var z=a.slice(e);
   a = x.concat(y,z);
}
console.log(a.join(" "));
