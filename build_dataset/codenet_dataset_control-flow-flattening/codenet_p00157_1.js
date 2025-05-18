function Longest(){
   ary.sort(function(a,b){
      if(a[0]==b[0])return a[1]-b[1];
      else return a[0]-b[0]
   });
   var A=ary.filter(function(v,i){
      if(i==0)return true;
      else if(ary[i-1][0]!=v[0])return true;
   });
   A=A.map(function(v){return v[1];});
   var L=[];
   L[0] = A[0];
   var length = 1;
   for(var i=1;i<A.length;i++){
      if (L[length-1] < A[i])L[length++] = A[i];
      else {
         for(var j=0;j<length;j++){
            if(L[j]>=A[i]){L[j]=A[i];break;}
         }
      }
   }
   return length;
}
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr=input.trim().split("\n");
while(true){
   var n=arr.shift()-0;
   if(n==0)break;
   var ary=[];
   for(var i=0;i<n;i++)ary.push(arr.shift().split(" ").map(Number));
   var m=arr.shift()-0;
   for(var i=0;i<m;i++)ary.push(arr.shift().split(" ").map(Number));
   var R=Longest();
   ary=ary.map(function(v){return [v[1],v[0]];});
   var H=Longest();
   console.log(Math.max(R,H));
}