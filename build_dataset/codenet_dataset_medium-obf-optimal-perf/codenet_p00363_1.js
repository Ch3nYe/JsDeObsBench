var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var [w,h,c] = input.trim().split(" ");
w=w-0;
h=h-0;
var ans=[];
ans.push("+" + "-".repeat(w-2) + "+");
for(var i=0;i<h - 2;i++)ans.push("|" + ".".repeat(w-2) + "|");
ans.push("+" + "-".repeat(w-2) + "+");
ans[Math.floor(h/2)]="|" + ".".repeat((w-3)/2)  + c + ".".repeat((w-3)/2)+ "|"
console.log(ans.join("\n").trim());
