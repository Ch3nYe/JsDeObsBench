var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
for(var i=0;i<Arr.length;i++){
   if(Arr[i]=="0 0")break;
   var arr=Arr[i].split(" ").map(Number);
   var N=arr[0];
   var m=arr[1];
   var n={};
   for(var j=0;j<N;j++)n[j]=null;
   var x=0;
   for(var k=0;k<N;k++){
      var y=0;
      do{
         x++;
         if(x==N)x=0;
         if(n[x]===null)y++;
      }while(y!=m);
      n[x]=k;
   }
   console.log(x);
}