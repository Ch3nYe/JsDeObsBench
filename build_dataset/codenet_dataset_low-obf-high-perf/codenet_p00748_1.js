var a=[1];
for(var i=1;i<100000;i++)a[i]=a[i-1]+i+1;
var b=[1];
var i=1;
while(true){
   b[i]=b[i-1]+a[i];
   if(b[i]>100000)break;
   i++;
}
var dpA=[];
var dpB=[];
for(var i=0;i<100000;i++)dpA[i]=Infinity;
for(var i=0;i<100000;i++)dpB[i]=Infinity;
dpA[0]=0;
dpB[0]=0;
for(var i=0;i<100000;i++){
   for(var j=0;j<b.length;j++){
      if(i-b[j]>=0)dpA[i]=Math.min(dpA[i-b[j]]+1,dpA[i]);
      if(b[j]%2==1 && i-b[j]>=0)dpB[i]=Math.min(dpB[i-b[j]]+1,dpB[i]);
   }
}
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr=input.trim().split("\n").map(Number);
while(true){
   var n=arr.shift();
   if(n==0)break;
   console.log(dpA[n]+" "+dpB[n]);
}