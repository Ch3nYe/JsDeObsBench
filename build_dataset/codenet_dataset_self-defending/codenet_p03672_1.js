"use strict";
    
const main = arg => {
    arg = arg.trim().split("\n");
    const S = arg[0].split("");
    
    if(S.length === 2) {
        console.log(1);
        return;
    }
    
    for(let i=0; i<S.length; i++) {
        S.pop();
        
        let mid = Math.floor(S.length / 2);
        
        if(S.slice(0, mid).join("") === S.slice(mid, S.length + 1).join("")) {
            console.log(S.length);
            return;
        }
    }
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));