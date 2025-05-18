"use strict";
    
const main = arg => {
    arg = arg.trim().split("\n");
    const N = parseInt(arg[0].split(" ")[0]);
    const W = parseInt(arg[0].split(" ")[1]);
    
    const wv = arg.slice(1, N + 1).map(n=>n.split(" ").map(l=>parseInt(l)));
    
    let dp = [...Array(N+1)].map(n=>[...Array(W+1)].fill(0));
    let answer = 0;
    
    for(let i=1; i<N+1; i++) {
        const w = wv[i-1][0];
        const v = wv[i-1][1];
        
        for(let j=0; j<W+1; j++) {
            if(w > j) {
                // 単体で重さオーバーなら前回のを引き継ぐ
                dp[i][j] = dp[i-1][j];
            } else {
                dp[i][j] = Math.max(dp[i-1][j], v + dp[i-1][j - w]);
            }
            
            if(dp[i][j] > answer) {
                answer = dp[i][j];
            }
        }
    }
    
    console.log(answer);
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));