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
var p=prime(50000);
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n").map(Number);
while(true){
   var n=Arr.shift();
   if(n==0)break;
   var obj={};
   for(var i=0;i<p.length;i++){
      if(p[i]>=n)break;
      for(var j=0;j<p.length;j++){
         if(p[j]>=n)break;
         if(p[i]+p[j]==n && obj.hasOwnProperty(p[j]+""+p[i])==false)obj[p[i]+""+p[j]]=true;
      }
   }
   console.log(Object.keys(obj).length);
}