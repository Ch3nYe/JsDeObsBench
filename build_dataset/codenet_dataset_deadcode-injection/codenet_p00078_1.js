function bomb(y,x){
   if(N==max)return;
   if(x<0)x=n-1;
   if(y<0)y=n-1;
   if(x>=n)x=0;
   if(y>=n)y=0;
   if(yx[y][x]!=-1){bomb(y+1,x-1);}
   else{yx[y][x]=("   "+N).slice(-4);N++;bomb(y+1,x+1);}
}
 
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n").map(Number);
for(var i=0;i<Arr.length;i++){
   var n=Arr[i];
   var max=n*n+1;
   if(n==0)break;
   var yx=[];
   for(var j=0;j<n;j++){
      yx[j]=[];
      for(var k=0;k<n;k++){
         yx[j][k]=-1;
      }
   }
   var N=1;
   bomb(Math.floor(n/2)+1,Math.floor(n/2));
   console.log(yx.join("\n").replace(/\,/g,""));
}