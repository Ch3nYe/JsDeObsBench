"use strict";
    
const main = arg => {
    const S  = arg.split("\n")[0].split(" ");
    let tail = S[0].split("").pop();

    for(let i=1; i<S.length; i++) {
        if(tail == S[i].split("")[0]) {
            tail = S[i].split("").pop();
        } else {
            console.log("NO");
            return;
        }
    }
    
    console.log("YES");
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));