var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
while(true){
   var n=Arr.shift()-0;
   if(n==0)break;
   var arr=(Arr.shift()).split(" ").map(Number);
   var ball=32;
   var i=0;
   while(true){
      ball-=(ball-1)%5;
      console.log(ball);
      if(ball==1){console.log(0);break;}
      ball-=arr[i%n];
      i++;
      console.log(ball);
   }
}