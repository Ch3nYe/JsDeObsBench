var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
while(true){
   var xys=Arr.shift().split(" ").map(Number);
   var x=xys[0];
   var y=xys[1];
   var s=xys[2];
   if(x==0 && y==0 && s==0)break;
   var max=0;
   for(var i=1;i<=s-1;i++){
      for(var j=1;j<=s-1;j++){
         var a=Math.floor(i*(100+x)/100)+Math.floor(j*(100+x)/100);
         if(a>s)break;
         if(a==s){
            var b=Math.floor(i*(100+y)/100)+Math.floor(j*(100+y)/100);
            max=Math.max(max,b);
            break;
         }
      }
   }
   console.log(max);
}