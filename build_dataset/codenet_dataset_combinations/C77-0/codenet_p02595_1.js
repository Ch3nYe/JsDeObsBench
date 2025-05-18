const main = (input) => {
  input = input.trim().split('\n')
  const [N, D] = input[0].split(' ').map(Number)
  const [, ...points] = input

  let ans = 0

  for (let v of points) {
    const [x, y] = v.split(' ').map(Number)

    if (Math.sqrt(x**2 + y**2) <= D) ans++
  }

  return console.log(ans)
}

process.env.MYTEST ? test() : main(require('fs').readFileSync('/dev/stdin', 'utf8'))