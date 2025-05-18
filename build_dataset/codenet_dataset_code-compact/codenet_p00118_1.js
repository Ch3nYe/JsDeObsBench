function bomb(y,x,v){
   var dy=[0,0,-1,1];
   var dx=[-1,1,0,0];
   for(var i=0;i<4;i++){
      var yy=y+dy[i];
      var xx=x+dx[i];
      if(yy<0 || yy>=n[0] || xx<0 || xx>=n[1])continue;
      if(v==yx[yy][xx]){yx[yy][xx]=0;bomb(yy,xx,v);}
   }
}
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
while(true){
   var n=(Arr.shift()).split(" ").map(Number);
   if(n[0]==0 && n[1]==0)break;
   var yx=[];
   for(var i=0;i<n[0];i++){
      var arr=(Arr.shift()).split("");
      yx.push(arr);
   }
   var cnt=0;
   for(var i=0;i<n[0];i++){
      for(var j=0;j<n[1];j++){
         var v=yx[i][j];
         if(v=="@" || v=="#" || v=="*"){cnt++;yx[i][j]=0;bomb(i,j,v);}
      }
   }
   console.log(cnt);
}