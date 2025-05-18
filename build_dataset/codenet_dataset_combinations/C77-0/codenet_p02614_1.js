const main = (input) => {
  const args = input.split('\n')
  const hwk = args.shift().split(' ').map(v => Number(v))
  const map = args.map(v => v.split(''))
  let sum = 0
  for (let i = 0; i < 2 ** hwk[0]; i++) {
    for (let j = 0; j < 2 ** hwk[1]; j++) {
      const binaryH = i.toString(2).padStart(hwk[0], '0').split('')
      const binaryW = j.toString(2).padStart(hwk[1], '0').split('')
      const filledRow = map.map((l, idx) => binaryH[idx] === '1' ? l.map(_ => 'r') : l)
      const filledAll = filledRow.map(v => v.map((v, idx) => binaryW[idx] === '1' ? 'r' : v))
      const count = filledAll.flat().filter(v => v === '#').length
      if (count === hwk[2]) {
        sum++
      }
    }
  }
  console.log(sum)
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'))