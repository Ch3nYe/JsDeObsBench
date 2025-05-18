"use strict";
    
const main = arg => {
    arg = arg.trim().split("\n");
    const L = parseInt(arg[0].split(" ")[0]);
    const R = parseInt(arg[0].split(" ")[1]);
    const d = parseInt(arg[0].split(" ")[2]);
    
    let answer = 0;
    
    for(let i=L; i<=R; i++) {
        if(i % d === 0) answer++;
    }
    
    console.log(answer);
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));