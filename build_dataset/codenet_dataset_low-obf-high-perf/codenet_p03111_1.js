'use strict'
function main(input) {
  input = input.trim().split('\n')
  let ABC = input.shift().split(' ').map(v => Number(v))
  const N = ABC.shift()
  input = input.map(v => Number(v)).sort((a, b) => b - a)
  const INF = Math.pow(10, 9)

  const dfs = (cur, a, b, c) => {
    if (cur === N) {
      if (Math.min(a, b, c) > 0) {
        return Math.abs(a - ABC[0]) + Math.abs(b - ABC[1]) + Math.abs(c - ABC[2]) - 30
      }
      return INF
    }
    return Math.min(
      dfs(cur+1, a, b, c),
      dfs(cur+1, a + input[cur], b, c) + 10,
      dfs(cur+1, a, b + input[cur], c) + 10,
      dfs(cur+1, a, b, c + input[cur]) + 10
    )
  }
  console.log(dfs(0,0,0,0))
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));
