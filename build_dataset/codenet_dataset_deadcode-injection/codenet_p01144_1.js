var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
while(true){
   var nm=(Arr.shift()).split(" ").map(Number);
   if(nm[0]==0 && nm[1]==0)break;
   var M=nm[1];
   var DP=[];
   for(var i=0;i<nm[0];i++){
      var dp=(Arr.shift()).split(" ").map(Number);
      DP.push(dp);
   }
   DP.sort(function(a,b){return b[1]-a[1]});
   var sum=0;
   DP.forEach(function(v){
      var d=v[0];
      var p=v[1];
      while(true){
         if(M==0 || d==0)break;
         M--;
         d--;
      }
      sum+=d*p;
   });
   console.log(sum);
}