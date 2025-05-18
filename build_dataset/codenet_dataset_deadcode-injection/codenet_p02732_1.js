"use strict";
const combi = function(n){
    return n*(n-1)/2
}

const main = arg => {
    const input = arg.trim().split("\n");

    const N = parseInt(input[0].split(" ")[0]);
    const A = input[1].split(" ").map(n => parseInt(n));

    let m = {}
    for(let i = 0; i<A.length; i++){
        if(!m[A[i]]) m[A[i]] = 1
        else m[A[i]]++
    }
    let orgCnt = 0
    let keys = Object.keys(m)
    for(let i = 0; i<keys.length; i++){
        orgCnt = orgCnt + combi(m[keys[i]])
    }

    for(let i = 0; i<A.length; i++){
        let num = m[A[i]]
        const diff = combi(num) - combi(num-1)
        console.log(orgCnt-diff)
    }
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));
