var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
while(true){
   var nS=Arr.shift().split(" ").map(Number);
   var n=nS[0];
   var S=nS[1];
   if(n==0 && S==0)break;
   var arr=[];
   for(var i=0;i<=100;i++)arr[i]=0;
   for(var i=0;i<n;i++){
      var v=Arr.shift()-0;
      arr[v]++;
   }
   var cnt=0;
   for(var i=0;i<=100;i++){
      for(var j=i+1;j<=100;j++){
         if(i+j>S)cnt+=Math.min(arr[i],arr[j]);
      } 
   }
   console.log(cnt);
}