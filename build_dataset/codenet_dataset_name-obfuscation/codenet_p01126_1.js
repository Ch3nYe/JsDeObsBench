var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
while(true){
   var A=Arr.shift();
   if(A=="0 0 0")break;
   var arr=A.split(" ").map(Number);
   var m=arr[1];
   var start=arr[2];
   var hpq=[];
   for(var i=0;i<m;i++)hpq.push(Arr.shift());
   hpq.sort(function(a,b){
      a=(a.split(" "))[0]-0;
      b=(b.split(" "))[0]-0;
      if(a>=b)return -1;
      else return 1;
   });
  var H=1001;
   for(var i=0;i<hpq.length;i++){
      var HPQ=hpq[i].split(" ").map(Number);
      var h=HPQ[0];
      var p=HPQ[1];
      var q=HPQ[2];
      if(H==h)continue;
      if(start==p || start==q){
         H=h;
         start=(start==p)?q:p;
      }
   }
   console.log(start);
}