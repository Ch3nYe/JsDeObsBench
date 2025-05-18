var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr=input.trim().split("\n");
while(true){
   var n=arr.shift()-0;
   if(n==0)break;
   var yx=[];
   for(var i=0;i<n;i++)yx.push(arr.shift().split(" ").map(Number));
   var xy=[];
   var hand=[];
   for(var i=0;i<n;i++){
      xy[i]=[];
      hand[i]=[];
      for(var j=0;j<n;j++){
         xy[i][j]=yx[j][i];
         hand[i][j]=[0,0];
      }
   }
   yx.forEach(function(v,i){
      var min=v.reduce(function(a,b){return Math.min(a,b);});
      hand[i][v.indexOf(min)][0]=1;
   });
   xy.forEach(function(v,i){
      var max=v.reduce(function(a,b){return Math.max(a,b);});
      hand[v.indexOf(max)][i][1]=1;
   });
   var ans=(function(){
      for(var i=0;i<n;i++){
         for(var j=0;j<n;j++){
            if(hand[i][j][0]==1 && hand[i][j][1]==1)return yx[i][j];
         }
      }
      return 0;
   })();
   console.log(ans);
}