'use strict'

function main(input) {

  input = input.split('\n')
  input[0] = input[0].split(' ').map(v => ~~v)
  const h = input[0][0]
  const w = input[0][1]

  let tmp = '#'.repeat(w + 2) + '\n'
  for (let i = 1; i <= h; i++) {
    tmp += '#' + input[i] + '#\n'
  }
  tmp += '#'.repeat(w + 2)

  console.log(tmp)

}
main(require("fs").readFileSync("/dev/stdin", "utf8"));