var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
while(true){
   var n=Arr.shift()-0;
   if(n==0)break;
   var arr=[];
   for(var i=0;i<n;i++){
      var v=Arr.shift()-0;
      arr.push(v);
   }
   arr.sort(function(a,b){return a-b;});
   var wait=[];
   var time=0;
   for(var i=0;i<n;i++){
      wait.push(time);
      time+=arr[i];
   }
   var sum=wait.reduce(function(a,b){return a+b;});
   console.log(sum);
}