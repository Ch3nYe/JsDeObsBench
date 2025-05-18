'use strict';

function Main(INPUT) {
    const N = INPUT.split("\n")[0];
    if (N == 7 || N == 5 || N == 3) {
        console.log("YES");
    } else {
        console.log("NO");
    }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
