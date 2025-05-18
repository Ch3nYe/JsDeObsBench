var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.replace(/\n$/,"")).split("\n");
while(true){
   var n=Arr.shift()-0;
   if(n==0)break;
   var str="";
   for(var i=0;i<n;i++)str+=Arr.shift()+" ";
   var arr=(str.trim()).split(" ");
   var s=Arr.shift();
   var f=arr.filter(function(v){return v[0]==s;});
   f.sort();
   var F=[];
   var memo="";
   for(var i=0;i<f.length;i++){
      if(memo==f[i]){
         F[F.length-1]=[f[i],F[F.length-1][1]+1];
      }
      else {
         F.push([f[i],1]);
         memo=f[i];
      }
   }
   F.sort(function(a,b){
      if(a[1]==b[1])return a[0]>b[0];
      else return b[1]-a[1];
   });
   var ans=[];
   for(var i=0;i<5;i++){
      if(F.length>i)ans.push(F[i][0]);
   }
   console.log((ans.length>0)?ans.join(" "):"NA");
}