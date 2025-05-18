var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr=input.trim().split("\n");
var n=arr.shift()-0;
var [a,b]=[0,1];
arr.forEach(v=>{
   var [q,x]=v.split(" ").map(Number);
   if(q==1){
      b*=x;
      a*=x;
   }
   else if(q==2)a-=x;
   else if(q==3)a+=x;
});
console.log(a+" "+b);
