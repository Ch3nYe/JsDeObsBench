var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
var n=Arr.shift()-0;
for(var I=0;I<n;I++){
   var arr=(Arr.shift()).split(" ");
   var sum=0;
   arr.forEach(function(v){
      v=v.replace(/(\d?)([mcxi])/g,function(s,s1,s2){
         s1=(s1)?s1-0:1;
         if(s2=="m")s2=1000;
         if(s2=="c")s2=100;
         if(s2=="x")s2=10;
         if(s2=="i")s2=1;
         sum+=(s1*s2);
         return s;
      });
   });
   var str=("000"+sum).slice(-4);
   var S=str.split("").map(Number);
   var result="";
   S.forEach(function(v,i){
      if(v==1)v="";
      if(v!==0){
         if(i==0)result+=v+"m";
         if(i==1)result+=v+"c";
         if(i==2)result+=v+"x";
         if(i==3)result+=v+"i";
      }
   });
   console.log(result);
}