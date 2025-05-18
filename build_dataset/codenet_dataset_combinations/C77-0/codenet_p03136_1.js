"use strict";
    
const main = arg => {
    arg = arg.trim().split("\n");
    const N = parseInt(arg[0].split(" ")[0]);
    let L = arg[1].split(" ").map(n=>parseInt(n)).sort((a,b)=>b-a);
    
    const longest = L.shift();
    const sum = L.reduce((m,n)=>m+n);
    
    console.log(longest < sum ? "Yes" : "No");
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));