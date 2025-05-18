var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
while(true){
   var N=Arr.shift()-0;
   if(N==0)break;
   if(N==1){console.log("1 1");continue;}
   var arr=[];
   arr[0]=[0,0];
   for(var i=0;i<N-1;i++){
      var nm=(Arr.shift()).split(" ").map(Number);
      var n=nm[0];
      var m=nm[1];
      var x=0;
      var y=0;
      if(m==0)x=-1;
      if(m==1)y=-1
      if(m==2)x=1;
      if(m==3)y=1;
      arr[i+1]=[arr[n][0]+x,arr[n][1]+y];
   }
   var xA=0;
   var xZ=0;
   var yA=0;
   var yZ=0;
   for(var i=0;i<arr.length;i++){
      xA=Math.min(xA,arr[i][0]);
      xZ=Math.max(xZ,arr[i][0]);
      yA=Math.min(yA,arr[i][1]);
      yZ=Math.max(yZ,arr[i][1]);
   }
   console.log((xZ-xA+1)+" "+(yZ-yA+1));
}