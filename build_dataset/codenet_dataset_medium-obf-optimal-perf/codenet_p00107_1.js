var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
while(true){
   var arr=(Arr.shift()).split(" ").map(Number);
   if(arr[0]==0 && arr[1]==0 && arr[2]==0)break;
   arr.sort(function(a,b){return a-b;});
   var R=Math.sqrt(arr[0]*arr[0]+arr[1]*arr[1]);
   var n=Arr.shift()-0;
   for(var i=0;i<n;i++){
      var r=Arr.shift()-0;
      console.log((r*2>R)?"OK":"NA");
   }
}