'use strict'
function main(input) {
  input = input.trim().split('\n')
  const NK = input.shift().split(' ').map(val => Number(val))
  const count = Math.min(...NK)
  input = input[0].split(' ').map(val => Number(val))

  const ans = []

  for(let l = 0; l <= count; l ++) {
    for (let r = 0; r <= count - l; r ++) {
      let temp = [
        ...input.slice(0, l),
        ...input.slice(NK[0] - r)
      ].sort((a, b) => a - b)
      let remain = NK[1] - l - r
      for (let i = 0; i < remain; i++) {
        if (temp[i] >= 0) break;
        temp[i] = 0
      }
      ans.push(temp.reduce((p, c) => p + c, 0))
    }
  }
  console.log(Math.max(...ans))
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));
