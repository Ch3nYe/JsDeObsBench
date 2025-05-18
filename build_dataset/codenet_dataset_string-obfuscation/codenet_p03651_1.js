"use strict";
    
const getGcd = (a, b) => {
    return a ? getGcd(b % a, a) : b;
}

const main = arg => {
    arg = arg.trim().split("\n");
    const N = parseInt(arg[0].split(" ")[0]);
    const K = parseInt(arg[0].split(" ")[1]);
    
    let A = arg[1].split(" ").map(n=>parseInt(n)).sort((a,b)=>b-a);
    
    const max = A[0];
    let   gcd = Infinity;
    
    if(max < K) {
        console.log("IMPOSSIBLE");
        return;
    }
    
    for(let i=0; i<N; i++) {
        for(let j=i+1; j<N; j++) {
            gcd = Math.min(gcd, getGcd(A[i], A[j]));
        }
    }
    
    console.log(K % gcd === 0 ? "POSSIBLE" : "IMPOSSIBLE");
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));