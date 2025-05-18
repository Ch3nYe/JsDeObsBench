"use strict";

const main = arg => {
    arg = arg.trim().split("\n");
    const N = parseInt(arg[0]);
    
    const cnt = [];
    
    for(let i=0; i<10; i++) {
        cnt.push(new Array(10).fill(0));
    }
    
    for(let i=1; i<=N; i++) {
        const S = String(i);
        const head = parseInt(S[0]);
        const tail = parseInt(S[S.length-1]);
        
        cnt[head][tail]++;
    }
    
    // console.log(cnt.join("\n"));
    
    let answer = 0;
    
    for(let i=0; i<10; i++) {
        for(let j=0; j<10; j++) {
            answer += cnt[i][j] * cnt[j][i];
        }
    }
    
    console.log(answer);
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));