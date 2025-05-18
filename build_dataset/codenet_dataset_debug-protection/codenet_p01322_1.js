var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
while(true){
   var nm=(Arr.shift()).split(" ").map(Number);
   var n=nm[0];
   var m=nm[1];
   if(n==0)break;
   var obj={};
   for(var i=0;i<n;i++){
      var arr=(Arr.shift()).split(" ");
      var v=arr[0].replace(/\*/g,"");
      obj[v]=arr[1]-0;
   }
   var sum=0;
   for(var i=0;i<m;i++){
      var v=Arr.shift();
      for(var k in obj){
         if(k==v.slice(-1*k.length))sum+=obj[k];
      }
   }
   console.log(sum);
}