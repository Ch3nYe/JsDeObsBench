function prime(max){
   var arr=[];
   for(var i=0;i<=max;i++)arr[i]=i;
   arr[0]=false;
   arr[1]=false;
   var sqrt=Math.floor(Math.sqrt(max));
   for(var i=2;i<=sqrt;i++){
      if(arr[i]==false)continue;
      for(var j=i+i;j<=max;j+=i){
         arr[j]=false;
      }
   }
   var result={};
   for(var i=0;i<=max;i++){
      if(arr[i]!==false)result[arr[i]]=true;
   }
   return result;
}
var p=prime(10000);
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n").map(Number);
for(var i=0;i<Arr.length;i++){
   var a=Arr[i];
   var A=[];
   var B=[];
   for(var j=1;j<=a;j++)A.push(j);
   for(var j=a;j>=1;j--)B.push(j);
   var pair=0;
   for(var j=0;j<a;j++){
      if(p.hasOwnProperty(A[j]) && p.hasOwnProperty(B[j]))pair++;
   }
   console.log(pair);
}