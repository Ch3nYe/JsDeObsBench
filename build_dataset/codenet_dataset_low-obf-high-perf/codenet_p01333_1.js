var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
while(true){
   var ab=(Arr.shift()).split(" ");;
   if(ab[0]==0 && ab[1]==0)break;
   var m=ab[1]-ab[0];
   var arr=[0,0,0];
   while(m>=1000){
      m-=1000;
      arr[2]++;
   }
   while(m>=500){
      m-=500;
      arr[1]++;
   }
   while(m>=100){
      m-=100;
      arr[0]++;
   }
   console.log(arr.join(" "));
}