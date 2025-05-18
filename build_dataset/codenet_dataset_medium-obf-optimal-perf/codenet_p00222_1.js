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
var p=prime(9999999);
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n").map(Number);
for(var i=0;i<Arr.length;i++){
   var a=Arr[i];
   if(a==0)break;
   var quad="";
   for(var j=5;j<p.length;j++){
   if(p[j]>a)break;
   var x=p[j]-8;
   if(x==p[j-3] && x+2==p[j-2] && x+6==p[j-1])quad=p[j];
   }
   console.log(quad);
}