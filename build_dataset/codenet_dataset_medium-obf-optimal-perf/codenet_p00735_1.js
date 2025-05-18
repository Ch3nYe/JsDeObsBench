var ms=[];
var flag=[];
for(var i=0;i<300000;i++)flag[i]=true;
var i=1;
while(true){
   var m=(7*i)-1;
   var s=(7*i)+1;
   if(m>300000)break;
   i++;
   if(flag[m])ms.push(m);
   if(flag[s])ms.push(s);
   var j=2;
   while(true){
      if(m*j>300000)break;
      flag[m*j]=false;
      flag[s*j]=false;
      j++;
   }
}
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr=input.trim().split("\n");
while(true){
   var n=arr.shift()-0;
   if(n==1)break;
   var ans=[];
   var i=0;
   ms.some(function(v){
      if(n%v==0)ans.push(v);
      return (n<v);
   });
   console.log(n+": "+ans.join(" "));
}