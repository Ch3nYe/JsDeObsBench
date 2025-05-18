"use strict";
    
const main = arg => {
    arg = arg.trim().split("\n");
    const N = parseInt(arg[0].split(" ")[0]);
    const K = parseInt(arg[0].split(" ")[1]);

    console.log(K === 1 ? 0 : N - K);
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));