"use strict";
function Main(input) {
    let lines = input.split("\n");
    let N = lines.shift() - 0;
    let V = lines.shift().split(/\s/).map((v) => v - 0);
    let ans = 0;
    for (let n = 0; n < N - 2; n++) {
        if (V[n] == V[n+1]) ans += 1;
        if (V[n] != V[n+2]) ans += 1;
    }
    console.log(ans);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
