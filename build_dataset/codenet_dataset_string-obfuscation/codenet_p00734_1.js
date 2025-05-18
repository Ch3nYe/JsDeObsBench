var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
while(true){
   var nm=Arr.shift();
   if(nm=="0 0")break;
   nm=nm.split(" ").map(Number);
   var n=nm[0];
   var m=nm[1];
   var N=[];
   var M=[];
   for(var i=0;i<n;i++)N.push(Arr.shift()-0);
   for(var i=0;i<m;i++)M.push(Arr.shift()-0);
   var sumN=N.reduce(function(a,b){return a+b;});
   var sumM=M.reduce(function(a,b){return a+b;});
   var arr=[];
   for(var i=0;i<n;i++){
      for(var j=0;j<m;j++){
         var a=sumN-N[i]+M[j];
         var b=sumM+N[i]-M[j];
         if(a==b)arr.push([N[i]+M[j],N[i],M[j]]);
      }
   }
   if(arr.length==0){console.log(-1);continue;}
   arr.sort(function(a,b){return a[0]-b[0];});
   console.log(arr[0][1]+" "+arr[0][2]);
}