var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
while(true){
   var Q=Arr.shift()-0;
   if(Q==-1)break;
   var x=Q/2;
   while(Math.abs(Math.pow(x,3)-Q)>=0.00001*Q){
      x=x-(Math.pow(x,3)-Q)/(3*Math.pow(x,2));
   }
   console.log(x.toFixed(6));
}