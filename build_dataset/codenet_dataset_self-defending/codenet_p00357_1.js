function tobu(arr){
   var max=0;
   for(var i=0;i<arr.length-1;i++){
      if(i>max)break;
      var d = Math.floor(arr[i]/10);
      max=Math.max(max,i+d);
   }
   return (max>=arr.length-1);
}
 
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr= input.trim().split("\n").map(Number);
var n=arr.shift();
if(tobu(arr) && tobu(arr.reverse()))console.log("yes");
else console.log("no");
