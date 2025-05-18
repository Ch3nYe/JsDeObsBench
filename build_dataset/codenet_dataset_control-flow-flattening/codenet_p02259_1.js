function bubbleSort(A){
   var N=A.length;
   var flag=1;
   var i=0;
   var cnt=0;
   while(flag==1){
      flag=0;
      for(var j=N-1;j>=i+1;j--){
         if(A[j]<A[j-1]){
         var m=A[j];
         A[j]=A[j-1];
         A[j-1]=m;
         flag=1;
         cnt++;
         }
      }
      i++;   
   }
   return [A,cnt];
}

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
Arr.shift();
var arr=Arr[0].split(" ").map(Number);
var result=bubbleSort(arr);
console.log(result[0].join(" "));
console.log(result[1]);