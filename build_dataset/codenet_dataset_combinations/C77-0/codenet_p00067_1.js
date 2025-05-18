function bomb(y,x){
   var dy=[0,0,-1,1];
   var dx=[-1,1,0,0];
   for(var i=0;i<4;i++){
      var yy=y+dy[i];
      var xx=x+dx[i];
      if(yy<0 || yy>=12 || xx<0 || xx>=12)continue;
      if(yx[yy][xx]=="a"){yx[yy][xx]=cnt;bomb(yy,xx);}
   }
}

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
var n=0;
var cnt=0;
var yx=[];
for(var I=0;I<Arr.length;I++){
   n++;
   var v=Arr[I].replace(/1/g,"a");
   var arr=v.split("");
   yx.push(arr);
   if(n!=12)continue;
   cnt=0;
   for(var i=0;i<12;i++){
      for(var j=0;j<12;j++){
         if(yx[i][j]=="a"){cnt++;yx[i][j]=cnt;bomb(i,j);}
      }
   }
   console.log(cnt);
   n=0;
   yx=[];
   I++;
}