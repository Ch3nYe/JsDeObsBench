var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr=input.trim().split("\n");
while(true){
   var wd=arr.shift();
   if(wd=="0 0")break;
   var W=arr.shift().split(" ").map(Number);
   var D=arr.shift().split(" ").map(Number);
   var sum=W.reduce(function(a,b){return a+b;});
   D.forEach(function(v){
      var index=W.indexOf(v);
      if(index!=-1)W[index]="";
      else sum+=v;
   });
   console.log(sum);
}