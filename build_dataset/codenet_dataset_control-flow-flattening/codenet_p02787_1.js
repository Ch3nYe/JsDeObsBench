'use strict'

function Main(input) {
  input = input.trim().split('\n')
  const array = input[0].split(' ').map(s => parseInt(s))
  const rest = input.slice(1)
  const H = array[0]
  const N = array[1]

  const magic = []
  for(let i = 0; i < rest.length; ++i) {
    const a = rest[i].split(' ').map(s => parseInt(s))
    magic.push([a[0], a[1]])
  }
  magic.sort((a, b) => a[0] - b[0])

  let dp = Array(H+1).fill(Infinity)

  dp[0] = 0
  for(let i = 0; i < N; ++i) {
    const w = magic[i][0]
    const v = magic[i][1]
    for(let j = 0; j <= H; ++j) {
      
      const min = Math.min(j + w, H)

      dp[min] = Math.min(dp[min], dp[j] + v) 
    }

    // console.log(`${i}までの魔法を利用`)
    // console.log(dp)
    // console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^')
  }
  
  console.log(dp[H])
  
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));