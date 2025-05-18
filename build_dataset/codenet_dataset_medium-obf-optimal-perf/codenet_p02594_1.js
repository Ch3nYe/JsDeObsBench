"use strict";
    
const main = arg => {
    arg = arg.trim().split("\n");
    const N = parseInt(arg[0].split(" ")[0]);

    console.log(N >= 30 ? "Yes" : "No");
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));