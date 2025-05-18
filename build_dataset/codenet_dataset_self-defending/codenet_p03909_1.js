"use strict";
    
const main = arg => {
    arg = arg.trim().split("\n");
    const H = parseInt(arg[0].split(" ")[0]);
    const W = parseInt(arg[0].split(" ")[1]);
    
    const words = arg.slice(1, H + 1).map(s=>s.split(" "));
    const alpha = "ABCDEFGHIJ".split("");
    
    for(let i=0; i<H; i++) {
        for(let j=0; j<W; j++) {
            if(words[i][j] === "snuke") {
                console.log(alpha[j] + (i + 1));
                return;
            }
        }
    }
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));
