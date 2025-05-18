"use strict";
    
const main = arg => {
    arg = arg.trim().split("\n");
    const K = parseInt(arg[0].split(" ")[0]);
    const X = parseInt(arg[0].split(" ")[1]);
    
    console.log(500 * K >= X ? "Yes" : "No");
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));