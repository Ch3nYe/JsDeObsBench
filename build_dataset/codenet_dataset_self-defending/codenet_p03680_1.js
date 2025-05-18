"use strict";
    
const main = arg => {
    arg = arg.trim().split("\n");
    const N = ~~arg[0];
    const S = arg.slice(1, N + 1).map(n=>~~n);
    
    let now = 1;
    let cnt = 0;
    
    while(now !== 2) {
        now = S[now - 1];
        cnt++;
        
        if(cnt > N) {
            console.log(-1);
            return;
        }
    }
    
    console.log(cnt);
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));