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
var p=prime(1299709);
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n").map(Number);
for(var i=0;i<Arr.length;i++){
   var a=Arr[i];
   if(a==0)break;
   for(var j=0;j<p.length;j++){
      if(p[j]==a){console.log(0);break;}
      if(p[j]>a){console.log(p[j]-p[j-1]);break;}
   }
}