const main = (input) => {
  input = input.trim().split('\n')
  const [n, k] = input[0].split(' ').map(Number)
  const directions = input[1].split(' ').map(v => Number(v)-1)
  const scoreList = input[2].split(' ').map(Number)

  const ans = [new Array(n).fill(0)]
  for (let i=0; i<k; i++) ans.push([])

  for (let i=0; i<k; i++) {
    for (let x=0; x<n; x++) {
      const score = ans[i][x]
      ans[i+1][directions[x]] = score + scoreList[directions[x]]
    }
  }

  let max = -Infinity
  for (let i=1; i<ans.length; i++) max = Math.max(max, Math.max(...ans[i]))
  return console.log(max)
}

process.env.MYTEST ? test() : main(require('fs').readFileSync('/dev/stdin', 'utf8'))