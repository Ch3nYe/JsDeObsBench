var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr=input.trim().split("\n");
var n=arr.shift()-0;
arr=arr.map(v=> v.replace(".","")).map(Number);
var a=[];
for(var i=0;i<=4000;i++)a[i]=0;
arr.forEach(v=> a[v]++);
var ans=[];
var s=[];
s[0]=a[0];
for(var i=1;i<=4000;i++)s[i]=s[i-1]+a[i];
arr.forEach(v=>{
   var point=0;
   point+=a[v]-1;
   if(v!=0)point+=s[v-1]*3;
   ans.push(point);
});
console.log(ans.join("\n"));
