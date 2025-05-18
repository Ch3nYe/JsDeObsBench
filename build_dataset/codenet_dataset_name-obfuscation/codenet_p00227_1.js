var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
while(true){
   var NM=Arr.shift();
   if(NM=="0 0")break;
   var nm=NM.split(" ").map(Number);
   var m=nm[1];
   var arr=(Arr.shift()).split(" ").map(Number);
   arr.sort(function(a,b){return b-a;});
   var sum=0;
   for(var i=0;i<arr.length;i++){
      if((i+1)%m!=0)sum+=arr[i];
   }
   console.log(sum);
}