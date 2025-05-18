var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var [m,f,b] =input.trim().split(" ").map(Number);
if(m>=b)console.log(0);
else if(m+f<b)console.log("NA");
else console.log(b-m);
