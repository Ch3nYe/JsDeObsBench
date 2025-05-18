var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr = input.trim().split(" ").map(Number);
arr.sort(function(a,b){
   return a - b;
});
var sum=0;
if(arr[0] == arr[1] && arr[1] == arr[2] && arr[2] == arr[3])sum++;
if(arr[0+4] == arr[1+4] && arr[1+4] == arr[2+4] && arr[2+4] == arr[3+4])sum++;
if(arr[0+8] == arr[1+8] && arr[1+8] == arr[2+8] && arr[2+8] == arr[3+8])sum++;
console.log((sum==3)?"yes":"no");