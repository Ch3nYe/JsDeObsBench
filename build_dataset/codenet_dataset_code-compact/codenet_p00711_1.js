function bomb(y,x){
   var dy=[0,0,-1,1];
   var dx=[-1,1,0,0];
   for(var i=0;i<4;i++){
      var yy=y+dy[i];
      var xx=x+dx[i];
      if(yy<0 || yy>=H || xx<0 || xx>=W)continue;
      if(yx[yy][xx]=="."){cnt++;yx[yy][xx]=cnt;bomb(yy,xx);}
   }
}

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
while(true){
   var WH=(Arr.shift()).split(" ").map(Number);
   var W=WH[0];
   var H=WH[1];
   if(W==0 && H==0)break;
      var yx=[];
      var Y,X;
      for(var i=0;i<H;i++){
         var arr=(Arr.shift()).split("");
         if(arr.indexOf("@")!=-1){Y=i;X=arr.indexOf("@");}
         yx.push(arr);
      }
      var cnt=1;
      bomb(Y,X);
      console.log(cnt);
}