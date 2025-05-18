'use strict'

function Main(input) {
  const N = Number(input.split("\n")[0].split(" ")[0])
  const M = Number(input.split("\n")[0].split(" ")[1])
  const list = input.split("\n").slice(1)
    .map(x => x.split(" ")
    .map(x => Number(x)))
    .filter(x => x[0] <= M)
    .sort((a, b) => {
      if(a[1] === b[1]) {
        return b[0] - a[0]
      } else {
        return b[1] - a[1]
      }
    })
  
  let ans = 0
  let now = 0
  if(list.length === 0) {
    console.log(0)
    return
  }

  for(let i=0; i<N; i++) {
    if(now === M) {
      break
    }
    if(list[i][0] > M-now) {
      continue
    }
    ans += list[i][1]
    now++
  }
  console.log(ans)
}
Main(require("fs").readFileSync("/dev/stdin", "utf8").trim())
