var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
Arr.forEach(function(v){
   var arr=v.split(" ").map(Number);
   var a=arr[0];
   var b=arr[1];
   var ans;
   if(35.5>a && 71>b)ans="AAA";
   else if(37.5>a && 77>b)ans="AA";
   else if(40>a && 83>b)ans="A";
   else if(43>a && 89>b)ans="B";
   else if(50>a && 105>b)ans="C";
   else if(55>a && 116>b)ans="D";
   else if(70>a && 148>b)ans="E";
   else ans="NA";
   console.log(ans);
});