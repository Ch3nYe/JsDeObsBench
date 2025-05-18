var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr = input.trim().split("\n");
var n= arr.shift()-0;
var p = arr.shift().split(" ").map(Number);
var ans = 0;
for(var i=1;i<=100;i++){
   var cnt = 0;
   p.forEach(v=>{
      if(v>=i)cnt++;
   });
   if(cnt>=i)ans=i;
}
console.log(ans);
