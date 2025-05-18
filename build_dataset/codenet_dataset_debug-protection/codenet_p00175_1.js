var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n").map(Number);
for(var i=0;i<Arr.length;i++){
   if(Arr[i]==-1)break;
   console.log(Arr[i].toString(4));
}