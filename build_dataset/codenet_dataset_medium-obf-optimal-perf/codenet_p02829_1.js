'use strict'
function main(input) {
  const args = input.split('\n');
  const num = args.map(el => parseInt(el))
  const ans = [1, 2, 3]
  let out = ans.filter(el => el !== num[0])
  out = out.find(el => el !== num[1])
  console.log(out)
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));