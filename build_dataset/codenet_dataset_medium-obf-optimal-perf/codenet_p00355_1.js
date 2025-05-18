var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr =input.trim().split("\n");
var [a,b] = arr.shift().split(" ").map(Number);
var n = arr.shift() - 0;
var flag = 0;
while(n--){
   var [s,f] = arr.shift().split(" ").map(Number);
   if(f<=a || b<=s)continue;
   else flag = 1;
}
console.log(flag);
