'use strict'

function Main(input) {
  const P = Number(input.split("\n")[0].split(" ")[0])
  const Q = Number(input.split("\n")[0].split(" ")[1])
  const R = Number(input.split("\n")[0].split(" ")[2])

  const max = Math.max(P, Q, R)
  console.log(P + Q + R - max)
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").trim())
