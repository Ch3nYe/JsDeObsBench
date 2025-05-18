var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
while(true){
   var n=Arr.shift()-0;
   if(n==0)break;
   var cnt=0;
   while(n!=1){
      cnt++;
      if(n%2==0)n=n/2;
      else n=(3*n)+1;
   }
   console.log(cnt);
}