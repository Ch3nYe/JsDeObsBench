var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr = input.trim().split("\n");
var n=arr.shift()-0;
var a=arr.shift().split(" ").map(Number);
var m=arr.shift()-0;
var b=arr.shift().split(" ").map(Number);
for(var i=0;i<m;i++){
   if(a.length-1<i || b[i]>a[i]){
      console.log(1);
      break;
   }else if(b[i]<a[i]){
      console.log(0);
      break;
   }
}
if(i==m)console.log(0);
