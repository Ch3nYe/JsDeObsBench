var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var [h,a,b]= input.trim().split(" ").map(Number);
var cnt = 0;
for(var i=a;i<=b;i++){
   if(h%i==0)cnt++;
}
console.log(cnt);
