var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var [h,r]=input.trim().split(" ").map(Number);
if(r+h==0)console.log(0);
else if(r+h>0)console.log(1);
else console.log(-1);
