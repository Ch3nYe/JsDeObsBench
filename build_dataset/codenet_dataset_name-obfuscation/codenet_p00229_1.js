var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
while(true){
   var BR=Arr.shift();
   if(BR=="0 0 0 0 0 0")break;
   var br=BR.split(" ").map(Number);
   var b=br[0];
   var r=br[1];
   var g=br[2];
   var c=br[3];
   var s=br[4];
   var t=br[5];
   var sum=100;
   sum+=b*15;
   sum+=r*15;
   sum+=(b*5+r*3)*15;
   sum+=g*7;
   sum+=c*2;
   sum-=(b*5+r*3)*2;
   sum-=(t-s-(b*5+r*3))*3;
   console.log(sum);
}