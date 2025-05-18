var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
var L=Arr.shift()-0;
for(var i=0;i<L;i++){
   var str=Arr[i];
   str=str.slice(0,-1);
   var num=eval(str);
   console.log(parseInt(num,10));
}