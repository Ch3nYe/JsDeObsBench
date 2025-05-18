'use strict'
function Main(input) {
  input = input.split("\n")
  let N = parseInt(input[0])
  let res = ''
  if (N === 0) {
    console.log(0)
    return
  }
  while (N !== 0) {
    res = String(Math.abs(N % -2)) + res
    if (N % -2 < 0) N += N < 0 ? -1 : 1
    N = parseInt(N / -2)
  }
  console.log(res)
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"))