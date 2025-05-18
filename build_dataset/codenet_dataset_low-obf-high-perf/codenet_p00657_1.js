var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
while(true){
   var rc=Arr.shift().split(" ").map(Number);
   var r=rc[0];
   var c=rc[1];
   if(r==0 && c==0)break;
   console.log((r%2==1 && c%2==1)?"no":"yes");
}