'use strict';

function Main(INPUT) {
    const input = INPUT.split("\n")[0].split(" ");
    const A = parseInt(input[0], 10);
    const B = parseInt(input[1], 10);

    console.log(A + B >= 10 ? "error" : A + B);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
