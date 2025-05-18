var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
for(var i=0;i<Arr.length;i++){
   var arr=Arr[i].split(" ").map(Number);
   var n=arr[2];
   var sum=0;
   while(n--){
      var str=((arr[0]/arr[1]).toFixed(n+2)).slice(-2);
      sum+=(str[0]-0);
   }
   console.log(sum);
}