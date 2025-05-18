function bomb(y,x,sum){
   YX[y][x]=sum;
   if(y==yx.length-1){
      max=Math.max(max,sum);
   }else if((yx.length-1)/2>y){
      if(YX[y+1][x]<sum+yx[y+1][x])bomb(y+1,x,sum+yx[y+1][x]);
      if(YX[y+1][x+1]<sum+yx[y+1][x+1])bomb(y+1,x+1,sum+yx[y+1][x+1]);      
   }else if((yx.length-1)/2<=y){
      if(x-1>=0){
         if(YX[y+1][x-1]<sum+yx[y+1][x-1])bomb(y+1,x-1,sum+yx[y+1][x-1]);
      }
      if(x<yx[y].length-1){
         if(YX[y+1][x]<sum+yx[y+1][x])bomb(y+1,x,sum+yx[y+1][x]);
      }
   }
}
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
var yx=[];
var YX=[];
Arr.forEach(function(v){
   var x=v.split(",").map(Number);
   var X=x.map(function(v){return 0;});
   yx.push(x);
   YX.push(X);
});
var max=0;
bomb(0,0,yx[0][0]);
console.log(max);