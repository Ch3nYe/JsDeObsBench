var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
while(true){
   var n=Arr.shift()-0;
   if(n===0)break;
   var ans=[];
   for(var i=0;i<n;i++){
      var arr=(Arr.shift()).split(" ");
      var name=arr.shift();
      arr=arr.map(Number);
      arr.unshift(name);
      (function(L, P, A, B, C, D, E, F, S, M){
         var time=A+B+C+((D+E)*M);
         var money=(F*S*M)-P;
         ans.push([L,money/time]);
      }).apply(null,arr);
   }
   ans.sort(function(a,b){
      if(a[1]==b[1])return (a[0].toString()>b[0].toString())?1:-1;
      else return b[1]-a[1];
   });
   ans.forEach(function(v){console.log(v[0]);});
   console.log("#");
}