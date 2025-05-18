var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr = input.trim().split("\n");
var str=arr[0];
var n = (arr[1]-0)+2;
var ans="";
for(var i=2;i<n;i++){
   ans += (str.includes(arr[i])?1:0) +"\n";
}
console.log(ans.trim());
