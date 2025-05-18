"use strict"
function main(arg) {
    let a = arg.trim().split("\n")[1].split(" ").map(Number)
    let N = a.length
    let ans = 0
    for (let i = 0; i < N; i++) {
        if ((i+1) % 2 === 0) {
            continue
        }
        if (a[i] % 2 === 0) {
            continue
        }
        ans++
        // console.log(i)
    }
    console.log(ans)
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));