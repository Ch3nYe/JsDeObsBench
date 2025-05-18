var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.replace(/\n$/,"")).split("\n");
var n=Arr.shift();
for(var i=0;i<n;i++){
   if(/^>'(=+)#\1~$/.test(Arr[i]))console.log("A");
   else if(/^>\^(Q=)+~~$/.test(Arr[i]))console.log("B");
   else console.log("NA");
}