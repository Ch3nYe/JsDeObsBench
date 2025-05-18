var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr=input.trim().split("\n").map(Number);
var n=arr.shift();
var a=arr.shift();
var cnt=1;
var max=1;
var memo=0;
arr.forEach(v=>{
   if(a>v){
      if(memo == 1)cnt=2;
      else cnt++;
      memo=-1;
   }else if(a<v){
      if(memo == -1)cnt=2;
      else cnt++;      
      memo=1;
   }
   max=Math.max(max,cnt);
   a=v;
});
console.log(max);
