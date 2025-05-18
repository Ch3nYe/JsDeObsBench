function heron(a,b,c){
   var s=(a+b+c)/2;
   var S=Math.sqrt(s*(s-a)*(s-b)*(s-c));
   return S;
}
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
var xy1=(Arr.shift()).split(",").map(Number);
var xy2=(Arr.shift()).split(",").map(Number);
var x1=xy1[0];var y1=xy1[1];
var x2=xy2[0];var y2=xy2[1];
var sum=0;
for(var I=0;I<Arr.length;I++){
   var xy3=Arr[I].split(",").map(Number);
   var x3=xy3[0];var y3=xy3[1];
   var d12=Math.sqrt(Math.pow(x1-x2,2)+Math.pow(y1-y2,2));
   var d13=Math.sqrt(Math.pow(x1-x3,2)+Math.pow(y1-y3,2));
   var d23=Math.sqrt(Math.pow(x2-x3,2)+Math.pow(y2-y3,2));
   sum+=heron(d12,d13,d23);
   x2=xy3[0];
   y2=xy3[1];
}
console.log(sum.toFixed(6));