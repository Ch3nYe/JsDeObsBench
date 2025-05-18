"use strict";
function Main(input) {
    let lines = input.split("\n");
    let nk = lines.shift().split(/\s/).map((v) => v - 0);
    let N = nk[0], K = nk[1];
    let S = lines.shift().split(/\s/)[0].split("").map((v) => v - 0);
    let n = 0, Z = [];
    let p, b = S[0], i = 0;
    while (n < N) {
        for (p = n; p < N && S[p] == b; p++) { }
        let l = p - n;
        Z.push({kind: b, pos: n, len: l, index: i++});
        b = (b + 1) % 2;
        n = p;
    }
    let L = Z.length, LL = L - (K - 1) * 2;
    let start = Z[0].kind;
    let ans = 0;
    for (let n = 0; n < LL; n += 2) {
        let sum = 0, m, k;
        for (m = n, k = 0; m < L && k < K; k++, m += 2) {
            if (m < L) sum += Z[m].len;
            if (m + 1 < L) sum += Z[m + 1].len;
        }
        if (start == 1 && m < L) sum += Z[m].len;
        if (ans < sum) ans = sum;
    }
    console.log(ans);
}
if (typeof window == "undefined") Main(require("fs").readFileSync("/dev/stdin", "utf8"));
