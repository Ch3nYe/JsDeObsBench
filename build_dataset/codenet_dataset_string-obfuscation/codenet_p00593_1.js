function bomb(y,x,cnt,f){
   yx[y][x]=("   "+cnt).slice(-3);
   if(y==n-1 && x==n-1)return;
   else if(y==n-1 && f==-1)bomb(y,x+1,cnt+1,1);
   else if(y==n-1 && f==1)bomb(y-1,x+1,cnt+1,1);
   else if(x==n-1 && f==1)bomb(y+1,x,cnt+1,-1);
   else if(x==n-1 && f==-1)bomb(y+1,x-1,cnt+1,-1);
   else if(y==0 && f==1)bomb(y,x+1,cnt+1,-1);
   else if(y==0 && f==-1)bomb(y+1,x-1,cnt+1,-1);
   else if(x==0 && f==-1)bomb(y+1,x,cnt+1,1);
   else if(x==0 && f==1)bomb(y-1,x+1,cnt+1,1);
   else if(f==1)bomb(y-1,x+1,cnt+1,1);
   else if(f==-1)bomb(y+1,x-1,cnt+1,-1);
}
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
var I=1;
while(true){
   var n=Arr.shift()-0;
   if(n==0)break;
   var yx=[];
   for(var i=0;i<n;i++){
      yx[i]=[];
      for(var j=0;j<n;j++){
         yx[i][j]=0;
      }
   }
   bomb(0,0,1,1);
   console.log("Case "+I+":");
   I++;
   console.log(yx.join("\n").replace(/\,/g,""));
}