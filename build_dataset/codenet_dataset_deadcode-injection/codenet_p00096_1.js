var ab=[];
for(var i=0;i<=1000;i++){
   for(var j=0;j<=1000;j++){
      ab.push(i+j);
   }
}
ab.sort(function(a,b){return a-b;});
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
while(true){
   if(Arr.length==0)break;
   var n=Arr.shift()-0;
   var cnt=0;
   var k=ab.length-1;
   for(var i=0;i<ab.length;i++){
      while(ab[i]+ab[k]>n)k--;
      var memo=k;
      while(ab[i]+ab[memo]==n){
         cnt++;
         memo--;
      }
   }
   console.log(cnt);
}