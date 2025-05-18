"use strict";
    
const main = arg => {
    arg = arg.trim().split("\n");
    const S = arg[0].split("");
    
    let previous = null;
    
    for(let i in S) {
        if(previous === "A" && S[i] === "C") {
            console.log("Yes");
            return;
        }
        
        previous = S[i];
    }
    
    console.log("No");
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));