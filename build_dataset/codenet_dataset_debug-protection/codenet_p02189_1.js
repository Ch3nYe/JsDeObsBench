var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr=input.trim().split("\n");
var n=arr.shift()-0;
var a=arr.shift().split(" ").map(Number);
var min=Infinity;
var ans=-1;
for(var i=0;i<n;i++){
   if(min>a[i]){
      ans=i;
      min=a[i];
   }
}
console.log(ans+1);
