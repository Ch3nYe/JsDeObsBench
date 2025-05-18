var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.replace(/\n$/,"")).split("\n");
var N=Arr.shift()-0;
for(var I=0;I<N;I++){
   var xywh=(Arr.shift()).split(" ").map(Number);
   var x1=xywh[0];
   var x2=xywh[0]+xywh[2];
   var y1=xywh[1];
   var y2=xywh[1]+xywh[3];
   var n=Arr.shift()-0;
   var cnt=0;
   for(var i=0;i<n;i++){
      var XY=(Arr.shift()).split(" ").map(Number);
      var X=XY[0];
      var Y=XY[1];
      if(x1<=X && x2>=X && y1<=Y && y2>=Y)cnt++;
   }
   console.log(cnt);
}