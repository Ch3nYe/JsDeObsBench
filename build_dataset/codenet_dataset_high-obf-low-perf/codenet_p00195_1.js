var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
var abc=[];
for(var i=0;i<Arr.length;i++){
if(abc.length==0 && Arr[i]=="0 0")break;
if(abc.length==4){
   var max=abc.reduce(function(a,b){return Math.max(a,b);});
   var ABC="ABCD".split("");
   var str=ABC[abc.indexOf(max)];
   console.log(str+" "+max);
   abc=[];
}else{
   var arr=Arr[i].split(" ").map(Number);
   abc.push(arr[0]+arr[1]);
}
}