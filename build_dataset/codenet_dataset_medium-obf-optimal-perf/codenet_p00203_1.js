function bomb(y,x){
   if(yx[y][x]==1)return;
   else if(yx[y][x]==2){
      var Y=y+2;
      var X=x;
      if(Y>=h){cnt++;return;}
      bomb(Y,X);
   }
   else if(yx[y][x]==0){
      var dx=[-1,0,1];
      for(var i=0;i<dx.length;i++){
         var Y=y+1;
         var X=x+dx[i];
         if(X<0 || X>=w)continue;
         if(Y>=h){cnt++;return;}
         if(yx[Y][X]==2 && dx[i]!=0)continue;
         bomb(Y,X);
      }
   }
}
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr=input.trim().split("\n");
while(true){
   var wh=arr.shift().split(" ").map(Number);
   var w=wh[0];
   var h=wh[1];
   if(w==0 && h==0)break;
   var yx=[];
   for(var i=0;i<h;i++)yx.push(arr.shift().split(" ").map(Number));
   var cnt=0;
   for(var i=0;i<w;i++){
      bomb(0,i);
   }
   console.log(cnt);
}