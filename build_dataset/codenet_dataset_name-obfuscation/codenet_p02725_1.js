"use strict"
// input
function main(input) {
    const args = input.split('\n')[0];
    const a = input.split('\n')[1];
    let as = a.split(' ');
    
    const K = Number(args.split(' ')[0]);
    const N = Number(args.split(' ')[1]);
    let ans = 0;
    const kh = Math.floor(K / 2);
    for (let i = 0; i < N; i++) {
        ans += Math.abs(0 - as[i]) > Math.abs(kh - as[i]) ? Math.abs(kh - as[i]) : Math.abs(0 - as[i]);
    }
    console.log(ans);
}

// output
main(require('fs').readFileSync('/dev/stdin', 'utf8'));