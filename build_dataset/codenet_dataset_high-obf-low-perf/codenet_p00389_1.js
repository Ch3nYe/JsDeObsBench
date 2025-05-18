var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var [n,k]= input.trim().split(" ").map(Number);
var takasa=0;
var w=0;
var cnt=0;
while(true){
   if(n==0)break;
   n--;
   cnt++;
   if(w<=k*cnt){
      takasa++;
      w+=cnt;
      cnt=0;
   }
}
console.log(takasa);
