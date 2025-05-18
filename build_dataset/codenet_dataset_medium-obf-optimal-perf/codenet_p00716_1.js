function F1(m,b,c){
   var sum=0;
   for(var i=0;i<Y;i++){
      sum+=Math.floor(m*b);
      m-=c;
   }
   return m+sum;
}
function F2(m,b,c){
   for(var i=0;i<Y;i++){
      m+=Math.floor(m*b)-c;
   }
   return m;
}
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
var M=Arr.shift()-0;
for(var i=0;i<M;i++){
   var money=Arr.shift()-0;
   var Y=Arr.shift()-0;
   var N=Arr.shift()-0;
   var arr=[];
   for(var j=0;j<N;j++){
      var D=(Arr.shift()).split(" ").map(Number);
      if(D[0]==0)arr.push(F1(money,D[1],D[2]));
      if(D[0]==1)arr.push(F2(money,D[1],D[2]));
   }
   console.log(Math.max.apply(null,arr));
}