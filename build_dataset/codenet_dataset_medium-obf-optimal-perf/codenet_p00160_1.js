var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
while(true){
   var n=Arr.shift()-0;
   if(n==0)break;
   var sum=0;
   for(var i=0;i<n;i++){
      var arr=(Arr.shift()).split(" ").map(Number);
      var L=arr[0]+arr[1]+arr[2];
      var W=arr[3];
      var x;
      if(L>160)x=0;
      if(L<=160)x=1600;
      if(L<=140)x=1400;
      if(L<=120)x=1200;
      if(L<=100)x=1000;
      if(L<=80)x=800;
      if(L<=60)x=600;
      var y;
      if(W>25)y=0;
      if(W<=25)y=1600;
      if(W<=20)y=1400;
      if(W<=15)y=1200;
      if(W<=10)y=1000;
      if(W<=5)y=800;
      if(W<=2)y=600;
      if(x!=0 && y!=0)sum+=Math.max(x,y);
   }
   console.log(sum);
}