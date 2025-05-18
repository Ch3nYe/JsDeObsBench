var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr = input.trim().split("\n");
var n=arr.shift()-0;
var a=arr.shift().split(" ").map(Number);
var q=arr.shift()-0;
var s="";
for(var i=0;i<q;i++){
   var [c,b,e]=arr[i].split(" ").map(Number);
   var m = a[b];
   if(c==0){
      for(var j=b;j<e;j++) m=Math.min(m,a[j]);
   }else{
      for(var j=b;j<e;j++) m=Math.max(m,a[j]);
   }
   s+=m+"\n";
}
console.log(s.trim());
