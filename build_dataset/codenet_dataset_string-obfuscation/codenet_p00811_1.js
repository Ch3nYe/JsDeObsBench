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
   var result=[];
   for(var i=0;i<=max;i++){
      if(arr[i]!==false)result.push(arr[i]);
   }
   return result;
}
var PRIME=prime(100000);

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr=input.trim().split("\n");
arr.some(function(v){
   if(v=="0 0 0")return true;
   var mab=v.split(" ").map(Number);
   var m=mab[0];
   var a=mab[1];
   var b=mab[2];
   var ans=[0,0,0];
   for(var p=0;p<PRIME.length;p++){
      for(var q=p;q<PRIME.length;q++){
         var pq=PRIME[p]*PRIME[q];
         if(pq>m)break;
         if(PRIME[q]*a <= PRIME[p]*b && ans[2]<pq)ans=[PRIME[p],PRIME[q],pq]
      }
   }
   console.log(ans[0]+" "+ans[1]);
});