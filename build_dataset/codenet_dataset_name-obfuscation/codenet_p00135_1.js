var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.replace(/\n$/,"")).split("\n");
var n=Arr.shift()-0;
for(var I=0;I<n;I++){
   var arr=Arr[I].split(":");
   var h=parseInt(arr[0],10);
   var m=parseInt(arr[1],10);
   var H=h*(360/12)+m*((360/12)/60);
   var M=m*(360/60);
   var hm=Math.abs(H-M);
   var ans;
   if(hm>=0 && hm<30)ans="alert";
   else if(hm>=90 && hm<=180)ans="safe";
   else ans="warning"
   console.log(ans);
}