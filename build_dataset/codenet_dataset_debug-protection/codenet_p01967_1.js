var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr = input.trim().split("\n");
arr=arr.map(v=>v.split(" ").map(Number));
var n = arr.shift();
var c=arr.shift();
var q = arr.shift();
var apple = [];
for(var i=0;i<=n;i++)apple[i]=0;
var ans=0;
for(var i=0;i<arr.length;i++){
   var [t,x,d]=arr[i];
   if(t==1){
      apple[x]+=d;
      if(c[x - 1] <apple[x]){
         ans=x;
         break;
      }
   } else {
      if(apple[x]<d){
         ans=x;
         break;
      }else{
         apple[x]-=d;
      }
   }
}
console.log(ans);

