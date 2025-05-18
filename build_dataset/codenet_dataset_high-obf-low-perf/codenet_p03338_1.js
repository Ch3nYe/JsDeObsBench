"use strict";
    
const main = arg => {
    arg = arg.trim().split("\n");
    const N = parseInt(arg[0].split(" ")[0]);
    const S = arg[1].split("");
    
    const charset = new Set(S);
    const chars = [...charset];
    
    let answer = 0;
    
    for(let i in S) {
        const first = S.slice(0, i);
        const last  = S.slice(i, S.length);
        
        let temp = 0;
        
        for(let j in chars) {
            if(first.indexOf(chars[j]) !== -1 && last.indexOf(chars[j]) !== -1) {
                temp++;
            } 
        }
        
        // console.log(first);
        // console.log(last);
        // console.log("---");
        answer = Math.max(answer, temp);
    }
    
    console.log(answer);
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));