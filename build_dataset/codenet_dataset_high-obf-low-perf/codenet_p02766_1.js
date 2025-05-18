"use strict";
function main(input) {
    let line = input.split(/\r?\n/g);
    let arr = line[0].split(" ");
    const N = parseInt(arr[0]), K = parseInt(arr[1]);
    let cnt = 1;
    while (K ** cnt < N) cnt++;
    console.log(cnt);
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));