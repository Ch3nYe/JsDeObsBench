var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
while(true){
   if(Arr.length==0)break;
   var n=Arr.shift();
   var arr=Arr.shift().split(" ").map(Number);
   arr.sort(function(a,b){return a-b;});
   var sum=0;
   var time=0;
   arr.forEach(function(v){
      sum+=v+time;
      time+=v;
   });
   console.log(sum);
}