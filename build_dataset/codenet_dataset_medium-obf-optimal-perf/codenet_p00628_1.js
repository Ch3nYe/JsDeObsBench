var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.replace(/\n$/,"")).split("\n");
while(true){
   var str=Arr.shift();
   if(str=="END OF INPUT")break;
   var arr=str.split(" ");
   arr.forEach(function(v,i){arr[i]=v.length;});
   console.log(arr.join(""));
}