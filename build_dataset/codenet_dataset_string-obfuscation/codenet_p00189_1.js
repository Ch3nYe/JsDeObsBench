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
while(true){
   var n=10;
   var m=Arr.shift()-0;
   if(m==0)break;
   var C=[];
   for(var i=0;i<n;i++){
      C[i]=[];
      for(var j=0;j<n;j++){
         C[i][j]=(i===j)?0:Infinity;
      }
   }
   var max=0;
   for(var i=0;i<m;i++){
      var A=(Arr.shift()).split(" ").map(Number);
      max=Math.max(max,A[0],A[1]);
      C[A[0]][A[1]]=A[2];
      C[A[1]][A[0]]=A[2];
   }
   warshall();
   var min=["",Infinity];
   for(var i=max;i>=0;i--){
      var arr=C[i].slice(0,max+1);
      var sum=arr.reduce(function(a,b){return a+b;});
      min[1]=Math.min(min[1],sum);
      if(min[1]==sum)min=[i,sum];
   }
   console.log(min.join(" "));
}