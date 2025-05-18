var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
var I=0;
while(true){
   var n=Arr.shift()-0;
   if(n==0)break;
   if(I!=0)console.log("");
   I++;
   var rank=[];
   for(var i=0;i<n;i++){
      var arr=(Arr.shift()).split(" ");
      var score=(3*(arr[1]-0))+(arr[3]-0)+((10-i)*0.01);
      rank.push([arr[0],score]);
   }
   rank.sort(function(a,b){
      a=a[1];
      b=b[1];
      return b-a;
   });
   rank.forEach(function(v){
      console.log(v[0]+","+Math.floor(v[1]));
   });
}