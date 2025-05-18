var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n").map(Number);
while(Arr.length!=0){
   var n=(Arr.shift())/4;
   if(n==0)break;
   var sum=0;
   while(n!=0){sum+=Arr.shift();n--}
   console.log(sum);
}