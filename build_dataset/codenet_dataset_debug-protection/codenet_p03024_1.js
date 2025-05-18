"use strict";
    
const main = arg => {
    arg = arg.trim().split("\n");
    const S = arg[0].split("");
    
    const win  = S.filter(n=>n==="o").length;
    const rest = 15 - S.length;
    
    console.log((rest + win) >= 8 ? "YES" : "NO");
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));