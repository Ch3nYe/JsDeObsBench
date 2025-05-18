const main = (input) => {

  input = input.trim().split('\n')
  let n = parseInt(input[0], 10) - 2
  const nums = input[1].split(' ').map(Number).sort((a, b) => b - a)

  let r = [1]
  for (n; n >= 2; n-=2) r.push(2)
  r.push(n)

  return console.log(r.reduce((a, b, i) => a + (b * nums[i]), 0))
}

process.env.MYTEST ? test() : main(require('fs').readFileSync('/dev/stdin', 'utf8'))