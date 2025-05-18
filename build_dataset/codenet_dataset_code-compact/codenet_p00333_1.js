var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var [w,h,c]= input.trim().split(" ").map(Number);
var max=1;
for(var i=1;i<=1000;i++){
   if(w%i==0 && h%i==0)max=i;
}
console.log(((w*h)/(max*max))*c);
