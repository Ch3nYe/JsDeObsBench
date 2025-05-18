"use strict";
    
const main = arg => {
    arg = arg.trim().split("\n");
    const N = parseInt(arg[0].split(" ")[0]);
    const K = parseInt(arg[0].split(" ")[1]);
    
    const S = arg[1].split("");
    let alreadyHappy = 0;
    let last;
    
    for(let i in S) {
        if(last === "L" && S[i] === "L") {
            alreadyHappy++;
        }
        
        if(last === "R" && S[i] === "R") {
            alreadyHappy++;
        }
        
        last = S[i];
    }

    console.log(Math.min(N - 1, alreadyHappy + (2 * K)));
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));