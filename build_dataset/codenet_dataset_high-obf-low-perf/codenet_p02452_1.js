var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr = input.trim().split("\n");
var n=arr.shift()-0;
var a=arr.shift().split(" ").map(Number);
var m=arr.shift()-0;
var b=arr.shift().split(" ").map(Number);
var memo=0;
var cnt = 0;
for(var i=0;i<m;i++){
   var num=b[i];
   for(var j=memo;j<n;j++){
      memo=j;
      if(num==a[j]){
         cnt++;
         break;
      }
   }
}
console.log((cnt==m)?1:0);
