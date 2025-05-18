function bomb(y,x){
   var Y=yx[y][x][1];
   var X=yx[y][x][0];
   if(ring.hasOwnProperty(Y+","+X)){
      var flag=true;
      for(var k in ring){
         if(obj.hasOwnProperty(k))flag=false;
         obj[k]=true;     
      } 
      if(flag)cnt++;
   }else{
      ring[Y+","+X]=true;
      bomb(Y,X);
   }
}
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr=input.trim().split("\n");
while(true){
   var n=arr.shift()-0;
   if(n==0)break;
   var yx=[];
   for(var i=0;i<n;i++){
      var tile=arr.shift().split(" ").map(Number);
      var t=[];
      for(var j=0;j<n;j++)t[j]=[tile.shift(),tile.shift()];
      yx.push(t);
   }
   var obj={};
   var cnt=0;
   for(var i=0;i<n;i++){
      for(var j=0;j<n;j++){
         if(obj.hasOwnProperty(i+","+j))continue;
         var ring={};
         ring[i+","+j]=true;
         bomb(i,j);
      }
   }
   console.log(cnt);
}