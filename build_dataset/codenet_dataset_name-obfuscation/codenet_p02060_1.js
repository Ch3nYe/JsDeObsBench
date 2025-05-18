var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr=input.trim().split("\n");
var n=arr.shift()-0;
var p=arr.shift().split(" ").map(Number);
var t=arr.shift().split(" ").map(Number);
var s=[];
for(var i=0;i<=200;i++)s[i]=Infinity;
s[0]=0;
for(var i=0;i<=100;i++){
   if(s[i]==Infinity)continue; 
   s[i+t[0]]=Math.min(s[i]+p[0],s[i+t[0]]);
   s[i+t[1]]=Math.min(s[i]+p[1],s[i+t[1]]);
   s[i+t[2]]=Math.min(s[i]+p[2],s[i+t[2]]);
   s[i+t[3]]=Math.min(s[i]+p[3],s[i+t[3]]);
}
var min=Infinity;
for(var i=n;i<=200;i++)min=Math.min(min,s[i]);
console.log(min);
