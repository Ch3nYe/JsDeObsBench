"use strict";
function Main(input) {
    const N = input.split("\n")[0] - 0;
    let e = new Array(N + 1).fill(0);
    for (let i = 2; i <= N; i++) {
        let cur = i;
        for (let j = 2; j <= i; j++) {
            while (cur % j == 0) {
                e[j] += 1;
                cur /= j;
            }
        }
    }
    const num = (m) => e.reduce((ac, x) => ac + ((x >= m - 1) ? 1 : 0), 0);
    let l75 = num(75);
    let l25 = num(25);
    let l15 = num(15);
    let l5 = num(5);
    let l3 = num(3);
    let r5x5x3 = (l5 * (l5 - 1) * (l3 - 2)) / 2;
    let r15x5 = l15 * (l5 - 1);
    let r25x3 = l25 * (l3 - 1);
    let r75 = l75;
    console.log(r75 + r25x3 + r15x5 + r5x5x3);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
