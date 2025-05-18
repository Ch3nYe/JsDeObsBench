var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr=input.trim().split("\n");
var n=arr.shift()-0;
while(n--){
   var xy=[0,0];
   var max=[0,0,0];
   while(true){
      var str=arr.shift();
      if(str=="0 0")break;
      var ary=str.split(" ").map(Number);
      xy[0]+=ary[0];
      xy[1]+=ary[1];
      var d=Math.sqrt(xy[0]*xy[0]+xy[1]*xy[1]);
      if(max[0]<d)max=[d,xy[0],xy[1]];
      else if(max[0]==d && max[1]<xy[0])max=[d,xy[0],xy[1]];
      }
   max.shift();
   console.log(max.join(" "));
}