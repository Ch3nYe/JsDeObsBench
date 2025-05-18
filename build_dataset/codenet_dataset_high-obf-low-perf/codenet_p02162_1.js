var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var [t,tt,r,rr]=input.trim().split(" ").map(Number);
if(r==-1 || rr==-1){
  if(t>tt)console.log("Bob");
  else if(t<tt)console.log("Alice");
  else if(t==tt)console.log("Draw");
}
else if(r>rr)console.log("Alice");
else if(r<rr)console.log("Bob");
else if(r==rr)console.log("Draw");
