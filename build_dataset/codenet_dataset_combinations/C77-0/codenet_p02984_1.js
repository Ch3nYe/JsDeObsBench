"use strict";
    
const main = arg => {
    arg = arg.trim().split("\n");
    const N = parseInt(arg[0]);
    const A = arg[1].split(" ").map(n=>parseInt(2 * n));
    
    let offset = 0;
    
    for(let i=0; i<N; i++) {
        offset = A[i] - offset;
    }
    
    let x = offset / 2;
    
    let cur = x;
    
    let answer = [];
    
    for(let i=0; i<N; i++) {
        answer.push(cur);
        cur = A[i] - cur;
    }
    
    console.log(answer.join(" "));
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));