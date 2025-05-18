"use strict";
function Main(input) {
  const N = parseInt(input);
  let ret = 0;
  for (let i = 1; (i * i) < N; i++) {
    const ic = i - 1;
    if (ic !== 0 && (N % ic) === Math.trunc(N / ic)) {
      ret += ic;
    }
    const j =Math.trunc(N / i) - 1;
    if ((N % j) === i) {
      ret += j;
    }
  }
  console.log(ret);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));