var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
var n=Arr[0]-0;
var x=Arr[1].split(" ").map(Number);
var y=Arr[2].split(" ").map(Number);
var sum1=0;
var sum2=0;
var sum3=0;
var max=0;
for(var i=0;i<n;i++){
   var a=Math.abs(x[i]-y[i]);
   sum1+=a;
   sum2+=Math.pow(a,2);
   sum3+=Math.pow(a,3);
   max=Math.max(max,a);
}
console.log(sum1.toFixed(6));
console.log(Math.sqrt(sum2).toFixed(6));
console.log(Math.pow(sum3,1/3).toFixed(6));
console.log(max.toFixed(6));