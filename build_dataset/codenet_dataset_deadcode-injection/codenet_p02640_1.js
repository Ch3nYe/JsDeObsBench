const input = require('fs').readFileSync('/dev/stdin', 'utf-8').split('\n')
const [X, Y] = input[0].split(' ').map(Number)
let ans = 'No'
if (X < Y) {
  const r = Y - X * 2
  if (r % 2 === 0 && r / 2 <= X) ans = 'Yes'
}
console.log(ans)
