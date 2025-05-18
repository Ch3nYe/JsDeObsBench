var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
while(true){
   var v=Arr.shift();
   if(v=="0 0")break;
   var NQ=v.split(" ").map(Number);
   var arr=[];
   for(var i=0;i<50;i++)arr[i]=0;
   for(var i=0;i<NQ[0];i++){
      var day=(Arr.shift()).split(" ").map(Number);
      var L=day.shift();
      for(var j=0;j<L;j++){
         arr[day[j]]++;
      }
   }
   var result=0;
   var max=Math.max.apply(null,arr);
   if(max>=NQ[1])NQ[1]=max;
   for(var i=0;i<arr.length;i++){
      if(arr[i]>=NQ[1]){
         result=i;
         break;
      }
   }
   console.log(result);
}