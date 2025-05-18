var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
for(i=0;i<Arr.length;i++){
   var arr=Arr[i].split(" ").map(Number);
   (function(x1, y1, x2, y2, x3, y3, x4, y4){
      var k1;
      var k2;
      if(x2-x1!==0)k1=((y2-y1)/(x2-x1)).toFixed(11);
      else k1=Infinity;
      if(x4-x3!==0)k2=(y4-y3)/(x4-x3).toFixed(11);
      else k2=Infinity;
      var ans="NO";
      if(k1==0 && k2==Infinity)ans="YES";
      if(k2==0 && k1==Infinity)ans="YES";
      if(k1==(-1*k2) && (k1!=0 && k2!=0))ans="YES";
      console.log(ans);
   }).apply(null,arr);
}