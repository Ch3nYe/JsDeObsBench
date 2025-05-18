var count=0;
 function isPrime(num) {
     if(num < 2) return false;
     for (var i = 2; i < num; i++) {
         if(num%i==0)
             return false;
     }
     count++;
     return true;
 }
 var input = require('fs').readFileSync('/dev/stdin', 'utf8');
 var p = input.split('\n');
  for(var i=0;i<p.length;i++){
   count=0;
   for(var j=2;j<=p[i];j++){
  isPrime(j);
 }
  console.log(count);
 }