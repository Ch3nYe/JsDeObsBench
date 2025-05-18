"use strict";
    
const main = arg => {
    arg = arg.trim().split("\n");
    const D = parseInt(arg[0].split(" ")[0]);
    const N = parseInt(arg[0].split(" ")[1]);
    
    let temp = [...Array(D * 2)].fill(0);
    let answer = parseInt(N + String(temp.join("")));
    let plus  = parseInt(1 + String(temp.join("")));
    
    console.log(N !== 100 ? answer : answer + plus);

}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));