function warshall(){
   for(var k=0;k<n;k++){
      for(var i=0;i<n;i++){
         for(var j=0;j<n;j++){
            C[i][j]=Math.min(C[i][j], C[i][k]+C[k][j]);
         }
      }
   }
}
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
var n=Arr.shift()-0;
var m=Arr.shift()-0;
var C=[];
for(var i=0;i<n;i++){
   C[i]=[];
   for(var j=0;j<n;j++){
      C[i][j]=(i===j)?0:Infinity;
   }
}
for(var i=0;i<m;i++){
   var A=(Arr.shift()).split(",").map(Number);
   C[A[0]-1][A[1]-1]=A[2];
   C[A[1]-1][A[0]-1]=A[3];
}
warshall();
var last=(Arr.shift()).split(",").map(Number);
var cost=C[last[0]-1][last[1]-1]+C[last[1]-1][last[0]-1]+last[3];
console.log(last[2]-cost);