var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr = input.trim().split("\n");
var q=arr.shift()-0;
var str="";
var map = new Map();
for(var i=0;i<q;i++){
   var [a,b,c]=arr[i].split(" ");
   if(a=="0")map.set(b,c);
   else str+=map.get(b) + "\n";
}
console.log(str.trim());
