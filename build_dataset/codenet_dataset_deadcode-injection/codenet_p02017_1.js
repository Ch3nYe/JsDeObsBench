var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var [a,b,c,d] = input.trim().split(" ").map(Number);
if((a*b)%2!=0 && (c+d)%2!=0)console.log("No");
else console.log("Yes");

