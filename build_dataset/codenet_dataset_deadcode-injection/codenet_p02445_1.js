var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr = input.trim().split("\n");
var n=arr.shift()-0;
var a=arr.shift().split(" ").map(Number);
var q=arr.shift()-0;
for(var i=0;i<q;i++){
   var [b,e,t]=arr[i].split(" ").map(Number);
   var k=e-b;
   for(var j=0;j<k;j++){
      [a[b+j],a[t+j]]= [a[t+j], a[b+j]];
   }
}
console.log(a.join(" "));
