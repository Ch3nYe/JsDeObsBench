var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
for(var i=0;i<4;i++){
var arr=Arr[i].split(" ").map(Number);
if(arr[0]==1)console.log(arr[1]*6000);
if(arr[0]==2)console.log(arr[1]*4000);
if(arr[0]==3)console.log(arr[1]*3000);
if(arr[0]==4)console.log(arr[1]*2000);
}