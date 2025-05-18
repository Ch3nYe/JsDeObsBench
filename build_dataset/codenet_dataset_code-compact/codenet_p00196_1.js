var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
while(true){
   var n=Arr.shift()-0;
   if(n==0)break;
   var team=[];
   for(var i=0;i<n;i++){
      var arr=(Arr.shift()).split(" ");
      var name=arr.shift();
      var scoreA=0;
      var scoreB=0;
      for(var j=0;j<n-1;j++){
         if(arr[j]-0===0)scoreA++;
         if(arr[j]-0===1)scoreB++;
      }
      team.push([name,scoreA*100+(10-scoreB)+((10-j)*0.01)]);
   }
   team.sort(function(a,b){return b[1]-a[1];});
   team.forEach(function(v){console.log(v[0]);});
}