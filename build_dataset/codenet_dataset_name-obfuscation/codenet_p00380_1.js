var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr=input.trim().split("\n");
var n=arr.shift()-0;
var a=arr.shift().split(" ").map(Number);
var b=a.slice().sort((x,y)=> x-y);
var q=arr.shift()-0;
var xy=arr.map(v=> v.split(" ").map(Number).map(v=>v-1));
xy.unshift([0,0]);
var A={};
var B={};
for(var i=0;i<a.length;i++){
   if(a[i]!=b[i]){
      A[i]=a[i];
      B[i]=b[i];
   }
}
var BB="";
for(var k in B)BB+=B[k];
var flag=false;
for(var i=0;i<=q;i++){
   [A[xy[i][0]],A[xy[i][1]] ]= [A[xy[i][1]],A[xy[i][0]]];
   var AA="";
   for(var k in A)AA+=A[k];
   if(AA==BB){
      flag=true;
      break;
   }
}
if(Object.keys(A).length==0)console.log(0);
else if(flag)console.log(i);
else console.log(-1);
