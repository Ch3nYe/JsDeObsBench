var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var [a,b,x]=input.trim().split(" ").map(Number);
var min=Infinity;
for(var i=0;i<=20;i++){
   for(var j=0;j<=40;j++){
      if(i*1000+j*500>=x)min=Math.min(min,i*a+j*b);
   }
}
console.log(min);
