var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
while(true){
   var n=Arr.shift()-0;
   if(n==0)break;
   var team=[];
   for(var i=0;i<n;i++){
      var arr=(Arr.shift()).split(" ").map(Number);
      var a=(arr[1]*60)+arr[2];
      var b=(arr[3]*60)+arr[4];
      var c=(arr[5]*60)+arr[6];
      var d=(arr[7]*60)+arr[8];
      team.push([arr[0],a+b+c+d]);
   }
   team.sort(function(a,b){
      a=a[1];
      b=b[1];
      return a-b;
   });
   console.log(team[0][0]);
   console.log(team[1][0]);
   console.log(team[team.length-2][0]);
}