var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr=input.trim().split("\n");
var TD=arr.shift().split(" ").map(Number);
var T=TD[0];
var D=TD[1];
var t=arr.shift().split(" ").map(Number);
var tA=t[0];
var tB=t[1];
var d=arr.shift().split(" ").map(Number);
var dA=d[0];
var dB=d[1];
var min=Infinity;
var i=0;
while(true){
   var vA=i*dA;
   if(vA>D)break;
   var j=0;
   while(true){
      var vB=j*dB;
      if(vA+vB>D)break;
      if(vA+vB!=0){
         var c=T-(tA * vA + tB * vB) / (vA + vB);
         min=Math.min(min,Math.abs(c));
      }
      j++;
   }
   i++;
}
console.log(min.toFixed(10));