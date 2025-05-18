var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.replace(/\n$/,"")).split("\n");
while(true){
   var arr=(Arr.shift()).split(" ").map(Number);
   if(arr.join("")=="00000")break;
   var y=(Arr.shift()).split(" ").map(Number);
   (function(N, A, B, C, X){
      var i=0;
      while(true){
         if(y[0]==X)y.shift();
         if(y.length==0){console.log(i);break;}
         X=((A*X)+B)%C;
         i++;
         if(i==10001){console.log(-1);break;}
      }
   }).apply(null,arr);
}