function bomb(arr){
   console.log(arr.join(" "));
   if(arr[0]===1)return;
   var i=arr.length-1;
   while(true){
      if(arr[i]!==1){
         if(arr[i]===2 || i===arr.length-1){arr[i]--;arr.push(1);}
         else{arr[i]--;arr[i+1]++;}
         break;
      }
      i--;
   }
   bomb(arr);
}
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
while(true){
   var n=Arr.shift()-0;
   if(n==0)break;
   bomb([n]);
}