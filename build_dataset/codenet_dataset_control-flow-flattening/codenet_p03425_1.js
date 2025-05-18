"use strict";

const main = arg => {
    arg = arg.trim().split("\n");
    const N = parseInt(arg[0]);
    const names = arg.slice(1, N + 1);
    
    const p = [0, 0, 0, 0, 0, 0, 1, 1, 1, 2];
    const q = [1, 1, 1, 2, 2, 3, 2, 2, 3, 3];
    const r = [2, 3, 4, 3, 4, 4, 3, 4, 4, 4];
    
    let march = [0, 0, 0, 0, 0];
    
    for(let i in names) {
        if(names[i][0] === "M") {
            march[0]++;
        }
        
        if(names[i][0] === "A") {
            march[1]++;
        }
        
        if(names[i][0] === "R") {
            march[2]++;
        }
        
        if(names[i][0] === "C") {
            march[3]++;
        }
        
        if(names[i][0] === "H") {
            march[4]++;
        }
    }
    
    let answer = 0;
    
    for(let i=0; i<10; i++) {
        answer += march[p[i]] * march[q[i]] * march[r[i]];
    }
    
    console.log(answer);
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));
