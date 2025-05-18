var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var [n,arr]= input.trim().split("\n");
arr=arr.split(" ").map(Number);
arr.sort(function(a,b){
   return a-b;
});
var sum = arr.reduce(function(a,b){
   return a+b;
});
if(sum%2==0)console.log(sum/2);
else {
   for(var i=0;i<arr.length;i++){
      if(arr[i]%2==1){
         console.log((sum-arr[i])/2);
         break;
      }
   }
}
