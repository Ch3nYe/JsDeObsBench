var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr=(input.trim()).split("\n");
while(true){
   var n=arr.shift()-0;
   if(n==0)break;
   var ary=arr.shift().split(" ");
   var L=0;
   var R=0;
   var UD=2;
   var cnt=0;
   ary.forEach(function(v){
      if(v=="lu")L=1;
      else if(v=="ru")R=1;
      else if(v=="ld")L=0;
      else if(v=="rd")R=0;
      if(UD==L+R){
         cnt++;
         UD=(UD==2)?0:2;
      }
   });
   console.log(cnt);
}