
"use strict";
    
const main = arg => {
    arg = arg.trim().split("\n");
    const N = ~~arg[0];
    const b = arg[1].split(" ").map(n=>~~n);
    
    let answer = [];
    
    for(let i=0; i<N; i++) {
        if(i % 2 === 0) {
            answer.push(b[i]);
        } else {
            answer.unshift(b[i]);
        }
    }
    
    if(N % 2 !== 0) answer = answer.reverse();
    
    console.log(answer.join(" "));
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));