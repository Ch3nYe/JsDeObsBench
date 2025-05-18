"use strict";
function main(arg) {
    const inputs = arg.split("\n")
    const N = parseInt(inputs[0].split(" ")[0])
    const K = parseInt(inputs[0].split(" ")[1])
    const list = inputs.slice(1,N+1).map((x)=>parseInt(x)).sort((a,b)=>{return a-b})
    let i, sa = []
    for(i=0; i<N-K+1; ++i)
        sa.push(list[i+K-1] - list[i])
    console.log(Math.min(...sa))
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));