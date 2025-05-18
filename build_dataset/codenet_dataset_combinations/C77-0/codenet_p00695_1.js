var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
Arr.push("");
var n=Arr.shift()-0;
for(var I=0;I<n;I++){
   var yx=[];
   var dp=[];
   for(var i=0;i<5;i++){
      var v=Arr.shift().split(" ").map(Number);
      yx.push(v);
      dp.push([]);
   }
   for(var y=0;y<5;y++){
      for(var x=0;x<5;x++){
         if(y==0)dp[y][x]=(yx[y][x]==1)?1:0;
         else dp[y][x]=(yx[y][x]==1)?dp[y-1][x]+1:0;
      }
   }
   var max=0;
   for(var y=0;y<5;y++){
      for(var i=0;i<5;i++){
         for(var j=i;j<5;j++){
            var min=Infinity;
            for(var k=i;k<=j;k++)min=Math.min(min,dp[y][k]);
            max=Math.max(max,min*(j-i+1));
         }
      }
   }
   console.log(max);
   Arr.shift();
}