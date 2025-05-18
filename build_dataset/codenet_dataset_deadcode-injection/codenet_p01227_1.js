var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr = input.trim().split("\n");
var t=arr.shift()-0;
while(t--){
   var [n,k]=arr.shift().split(" ").map(Number);
   var x=arr.shift().split(" ").map(Number);
   var d=x[x.length-1]-x[0];
   var a=[];
   for(var i=0;i<x.length-1;i++)a.push(x[i+1]-x[i]);
   a.sort((a,b)=>b-a);
   var sum=0;
   for(var i=0;i<k-1;i++){
      if(i>a.length-1)break;
      sum+=a[i];
   }
   console.log(d-sum);
}
