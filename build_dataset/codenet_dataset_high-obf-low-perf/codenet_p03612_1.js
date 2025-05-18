"use strict";
    
const main = arg => {
    arg = arg.trim().split("\n");
    const N = parseInt(arg[0]);
    const P = arg[1].split(" ").map(n=>parseInt(n));
    
    let answer = 0;
    
    for(let i in P) {
        if(parseInt(i) + 1 === P[i]) {
            let temp = P[i];
            P[i] = P[parseInt(i) + 1];
            P[parseInt(i) + 1] = temp;
            answer++;
        }
    }
    
    console.log(answer);
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));