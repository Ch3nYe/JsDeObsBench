"use strict";
    
const main = arg => {
    arg = arg.trim().split("\n");
    const N = parseInt(arg[0].split(" ")[0]);
    const M = parseInt(arg[0].split(" ")[1]);
    
    const dangers = arg.slice(1, M + 1);
    
    let answer = [...Array(N + 1)].fill(1);
    let broken = -1;
    let NG     = false;
    
    for(let i in dangers) {
        if(broken + 1 === dangers[i]) {
            NG = true;
        }
        
        answer[dangers[i]] = 0;
        broken = dangers[i];
    }
    
    for(let i=2; i<=N; i++) {
        answer[i] = answer[i] * (answer[i - 2] + answer[i - 1]) % 1000000007;
    }
    
    console.log(answer[N]);
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));