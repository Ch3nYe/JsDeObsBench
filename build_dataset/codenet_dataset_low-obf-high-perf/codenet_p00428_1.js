var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
while(true){
   var NM=Arr.shift();
   if(NM=="0 0")break;
   var nm=NM.split(" ").map(Number);
   var n=nm[0];
   var m=nm[1];
   var arr=[];
   for(var i=0;i<m;i++)arr.push({x:(i+1),sum:0});
   for(var i=0;i<n;i++){
      var data=(Arr.shift()).split(" ").map(Number);
      arr.forEach(function(v,j){arr[j].sum+=data[j];});
   }
   arr.sort(function(a,b){
      a=a.sum;
      b=b.sum;
      return b-a;
   });
   var c=[];
   arr.forEach(function(v){c.push(v.x);});
   console.log(c.join(" "));
}