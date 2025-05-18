var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
while(true){
   var N=Arr.shift()-0;
   if(N==0)break;
   var arr=[];
   for(var i=0;i<N;i++){
      var ipqr=(Arr.shift()).split(" ").map(Number);
      arr.push(ipqr);
   }
   var PQRC=(Arr.shift()).split(" ").map(Number);
   var result=[];
   arr.forEach(function(v){
      var bad=0;
      if(PQRC[0]<v[1])bad++;
      if(PQRC[1]<v[2])bad++;
      if(PQRC[2]<v[3])bad++;
      if(PQRC[3]<4*(v[1]+v[3])+(9*v[2]))bad++;
      if(bad==0)result.push(v[0]);
   });
   console.log((result.length==0)?"NA":result.join("\n"));
}