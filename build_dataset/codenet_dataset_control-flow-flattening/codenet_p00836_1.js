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
var p=prime(10000);

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr=input.trim().split("\n").map(Number);
var cnt=[];
for(var i=0;i<=10000;i++)cnt[i]=0;
p.forEach(function(v,index){
   cnt[v]++;
   for(var i=index+1;i<p.length;i++){
      v+=p[i];
      if(v>10000)break;
      cnt[v]++;
   }
});
arr.some(function(v){
   if(v==0)return true;
   console.log(cnt[v]);
});