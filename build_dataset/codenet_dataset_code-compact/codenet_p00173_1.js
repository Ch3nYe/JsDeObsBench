var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
for(var i=0;i<Arr.length;i++){
   var arr=Arr[i].split(" ");
   var a=(arr[1]-0)+(arr[2]-0);
   var b=(arr[1]-0)*200+(arr[2]-0)*300;
   console.log(arr[0]+" "+a+" "+b);
}