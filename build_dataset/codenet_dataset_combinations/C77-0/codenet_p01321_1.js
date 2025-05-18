var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
while(true){
   var n=Arr.shift()-0;
   if(n==0)break;
   var S=[];
   for(var i=0;i<n;i++){
   var arr=(Arr.shift()).split(" ").map(Number);
      var sum=arr.reduce(function(a,b){return a+b;});
      S.push(sum);
   }
   S.sort(function(a,b){return b-a;});
   console.log(S[0]+" "+S[S.length-1]);
}