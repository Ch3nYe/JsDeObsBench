var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var [n,arr]= input.trim().split("\n");
arr=arr.split(" ").map(Number);
for(var i=1;i<=100;i++){
  var sum=0;
  var flag = arr.every(v=>{
     sum = sum + v - i;
     return  (sum >= 0);
  });
  if(!flag)break;
}
console.log(i-1);
