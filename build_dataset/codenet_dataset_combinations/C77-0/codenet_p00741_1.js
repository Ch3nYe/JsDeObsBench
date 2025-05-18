function bomb(y,x){
   var dy=[-1,-1,-1,0,0,1,1,1];
   var dx=[-1,0,1,-1,1,-1,0,1];
   for(var i=0;i<8;i++){
      var yy=y+dy[i];
      var xx=x+dx[i];
      if(yy<0 || yy>=H || xx<0 || xx>=W)continue;
      if(yx[yy][xx]=="a"){yx[yy][xx]=cnt;bomb(yy,xx);}
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
         var str=Arr.shift();
         str=str.replace(/1/g,"a");
         var arr=str.split(" ");
         yx.push(arr);
      }
     var cnt=0;
     for(var i=0;i<H;i++){
        for(var j=0;j<W;j++){
           if(yx[i][j]=="a"){cnt++;yx[i][j]=cnt;bomb(i,j);}
        }
     }
      console.log(cnt);
}