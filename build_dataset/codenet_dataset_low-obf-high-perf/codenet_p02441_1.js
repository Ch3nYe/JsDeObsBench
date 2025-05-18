var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr = input.trim().split("\n");
var n=arr.shift()-0;
var a=arr.shift().split(" ").map(Number);
var q=arr.shift()-0;
var s="";
for(var i=0;i<q;i++){
   var [b,e,k]=arr[i].split(" ").map(Number);
   var cnt = 0;
   for(var j=b;j<e;j++){
      if(a[j]==k)cnt++;
   }
   s+=cnt+"\n";
}
console.log(s.trim());
