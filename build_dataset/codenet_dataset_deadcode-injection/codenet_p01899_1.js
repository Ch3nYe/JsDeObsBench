var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr= input.trim().split("\n");
var [n,d]=arr.shift().split(" ").map(Number);
var p=arr.shift().split(" ").map(Number);
var sum=0;
p.forEach(v=>{
   sum+=Math.max(0,v-d);
});
console.log((sum==0)?"kusoge":sum);
