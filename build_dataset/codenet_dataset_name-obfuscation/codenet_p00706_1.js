var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr=input.trim().split("\n");
while(true){
   var n=arr.shift()-0;
   if(n==0)break;
   var wh=arr.shift().split(" ").map(Number);
   var w=wh[0];
   var h=wh[1];
   var XY=[];
   for(var i=0;i<w;i++){
      XY[i]=[];
      for(var j=0;j<h;j++){
         XY[i][j]=0;
      }
   }
   while(n--){
      var xy=arr.shift().split(" ").map(Number);
      XY[xy[0]-1][xy[1]-1]=1;
   }
   var st=arr.shift().split(" ").map(Number);
   var s=st[0];
   var t=st[1];
   var max=0;
   for(var i=0;i<=w-s;i++){
      for(var j=0;j<=h-t;j++){
         var sum=0;
         for(var x=0;x<s;x++){
            for(var y=0;y<t;y++){
               sum+=XY[i+x][j+y];
            }
         }
         max=Math.max(sum,max);
      }
   }
   console.log(max);
}