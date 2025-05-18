var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
var dy=[-1,0,0,1];
var dx=[0,-1,1,0];
Arr.forEach(function(v,I){
   var V=v.split(" ").map(Number);
   var obj={};
   var P=[[V,0]];
   while(P.length>0){
      var A=P.shift();
      var arr=A[0];
      var cnt=A[1];
      if(arr.join("")=="01234567"){console.log(cnt);break;}
      var index=arr.indexOf(0);
      var y=Math.floor(index/4);
      var x=index%4;
      var yx=[arr.slice(0,4),arr.slice(4,8)];
      for(var i=0;i<4;i++){
         var yy=y+dy[i];
         var xx=x+dx[i];
         if(yy<0 || xx<0 || yy>=2 || xx>=4)continue;
         yx[y][x]=yx[yy][xx];
         var card=yx[yy][xx];
         yx[yy][xx]=0;
         var YX=yx[0].concat(yx[1]);
         var str=YX.join("");
         if(obj.hasOwnProperty(str)==false){
               obj[str]=true;
               P.push([YX,cnt+1]);
         }
         yx[yy][xx]=card;
         yx[y][x]=0;
      }
   }
});