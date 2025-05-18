'use strict'
const Main = (arg) => {
  let input = arg.trim().split('\n');
  let n = parseInt(input[0]);
  let pArr = input[1].split(' ').map(Number);
  // console.log({ n, pArr });
  let count = 0;
  for (let i = 1; i - 1 < n; i++) {
    if ((pArr[i - 1] < pArr[i] && pArr[i] < pArr[i + 1])
      || (pArr[i + 1] < pArr[i] && pArr[i] < pArr[i - 1])) {
      count += 1;
    }
  }
  console.log(count);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
