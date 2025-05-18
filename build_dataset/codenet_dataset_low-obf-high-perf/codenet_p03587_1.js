"use strict";
    
const main = arg => {
    arg = arg.trim().split("\n");
    const S = arg[0].split("");
    
    console.log(S.filter(n=>n==="1").length);
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));