var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var [x,y]=input.trim().split(" ").map(Number);
var cnt = 0;
for(var i=0;i<=x;i++){
   if(y*i*2/(x*2)%1===0)cnt++;
}
console.log(x+1+y+1-cnt);
