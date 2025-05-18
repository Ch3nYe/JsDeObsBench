var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
while(true){
var N=Arr.shift()-0;
if(N==0)break;
for(var I=0;I<N;I++){
var A=Arr.shift().split(" ").map(Number);
var x1=A[0];
var y1=A[1];
var z1=A[2];
var w1=A[3];
 
var x2=A[4];
var y2=A[5];
var z2=A[6];
var w2=A[7];
 
   var a = x1 * x2;
   var i = x1 * y2;
   var j = x1 * z2;
   var k = x1 * w2;
 
   i += y1 * x2;
   a -= y1 * y2;
   k += y1 * z2;
   j -= y1 * w2;
              
   j += z1 * x2;
   k -= z1 * y2;
   a -= z1 * z2;
   i += z1 * w2;
              
   k += w1 * x2;
   j += w1 * y2;
   i -= w1 * z2;
   a -= w1 * w2;
console.log(a+" "+i+" "+j+" "+k);
}
}