function bomb(y,x){
   var dx=[-1,1,0,0];
   var dy=[0,0,-1,1];
   for(var i=0;i<4;i++){
      for(var j=1;j<=3;j++){
         var yy=y+(dy[i]*j);
         var xx=x+(dx[i]*j);
         if(yy<0 || yy>=8 || xx<0 || xx>=8)continue;
         if(yx[yy][xx]==1){yx[yy][xx]=0;bomb(yy,xx);}
      }
   }
}

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
var AL=Arr.shift();
for(var i=0;i<AL;i++){
   Arr.shift();
   var yx=[];
   for(var j=0;j<8;j++){
      var line=Arr.shift().split("").map(Number);
      yx.push(line);
   }
   var X=(Arr.shift()-0)-1;
   var Y=(Arr.shift()-0)-1;
   if(yx[Y][X]==1){yx[Y][X]=0;bomb(Y,X);}
   console.log("Data "+(i+1)+":");
   for(var j=0;j<8;j++)console.log(yx[j].join(""));
}