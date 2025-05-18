var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.replace(/\n$/,"")).split("\n");
while(true){
   var str=Arr.shift();
   if(str=="0 0")break;
   var arr=str.split(" ");
   var data=[0];
   if(arr[0]>0)data=data.concat((Arr.shift()).split(" ").map(Number));
   if(arr[1]>0)data=data.concat((Arr.shift()).split(" ").map(Number));
   data.sort(function(a,b){return a-b;});
   var max=0;
   data.reduce(function(a,b){
      max=Math.max(max,Math.abs(a-b));
   return b;
   });
   console.log(max);
}