"use strict";
    
const main = arg => {
    arg = arg.trim().split("\n");
    const N = parseInt(arg[0].split(" ")[0]);
    const A = arg[1].split("");
    
    const Rsum = A.filter(n=>n==="E").length;
    const Lsum = N - Rsum;
    
    let Rcnt = 0;
    let Lcnt = 0;
    
    let answer = Infinity;
    
    for(let i=0; i<N; i++) {
        // 左半分
        const needMoveLeft = Lcnt;
        
        // 右半分
        let needMoveRight = Rsum - Rcnt;
        
        if(A[i] === "E") {
            needMoveRight--;
        }
    
        answer = Math.min(answer, needMoveLeft + needMoveRight);
        
        
        if(A[i] === "W") {
            Lcnt++;
        } else {
            Rcnt++;
        }
    }
    
    console.log(answer);
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));