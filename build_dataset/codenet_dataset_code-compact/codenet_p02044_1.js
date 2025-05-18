var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr=input.trim().split("\n");
while(true){
   var [n,m]=arr.shift().split(" ").map(Number);
   if(n==0 && m==0)break;
   var x=m/n;
   var sum=0;
   var a=arr.shift().split(" ").map(Number);
   a.forEach(v=>{
      if(v>=x)sum+=x;
      else sum+=v;
   });
   console.log(sum);
}
