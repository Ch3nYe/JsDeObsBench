var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n").map(Number);
var L=Arr.shift();
for(var i=0;i<L;i++){
   console.log("Case "+(i+1)+":");
   var v=Arr[i];
   for(var j=0;j<10;j++){
      v="000000"+(v*v);
      v=v.slice(-6);
      v=v.slice(0,4);
      v=parseInt(v,10);
      console.log(v);
   }
}