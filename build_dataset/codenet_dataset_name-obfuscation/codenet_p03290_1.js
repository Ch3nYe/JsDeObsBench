'use strict'
function main(input) {
  input = input.trim().split('\n')
  const DG = input.shift().split(' ').map(v => Number(v))
  input = input.map(v => v.split(' ').map(v => Number(v)))
  const calc = (a, r) => {
    let count = [Math.pow(10, 8)]
    for(let i = 0; i < DG[0]; i++) {
      const cur = Math.pow(2, i)
      if ((a & cur) === cur) {
        const points = (i+1) * 100
        let max = points * input[i][0] + input[i][1]
        let num = Math.ceil(r / points)
        if (max < r) {
          count.push(input[i][0] + calc(a - cur, r - max))
        } else {
          count.push(num < input[i][0] ? num : input[i][0])
        }
      }
    }
    return Math.min(...count)
  }
  console.log(calc(Math.pow(2, DG[0]) - 1, DG[1]))
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));
