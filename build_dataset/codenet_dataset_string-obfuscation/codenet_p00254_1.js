var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
while(true){
   var n=Arr.shift();
   if(n=="0000")break;
   if(n=="1111" || n=="2222" || n=="3333" || n=="4444" || n=="5555"){console.log("NA");continue;}
   if(n=="6666" || n=="7777" || n=="8888" || n=="9999"){console.log("NA");continue;}
   var i=0;
   while(true){
      if(n=="6174")break;
      i++;
      var arr=n.split("").map(Number);
      arr.sort(function(a,b){return b-a;});
      var L=parseInt(""+arr[0]+arr[1]+arr[2]+arr[3],10);
      var S=parseInt(""+arr[3]+arr[2]+arr[1]+arr[0],10);
      n=("0000"+(L-S)).slice(-4);
   }
   console.log(i);
}