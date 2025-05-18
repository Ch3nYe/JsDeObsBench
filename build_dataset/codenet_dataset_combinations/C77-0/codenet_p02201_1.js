var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr=input.trim().split("\n");
var n=arr.shift()-0;
var cnt=0;
arr.forEach(v=>{
   if(v=="E869120")cnt++;
});
console.log(cnt);
