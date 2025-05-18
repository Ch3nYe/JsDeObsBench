const main = (input) => {
  const [n, ...rows] = input.trim().split('\n')
  const k = ['AC', 'WA', 'TLE', 'RE']
  const ans = {}
  for (let v of k) ans[v] = 0

  for (let r of rows) ans[r] += 1

  for (let v of k) console.log(`${v} x ${ans[v]}`)
}

process.env.MYTEST ? test() : main(require('fs').readFileSync('/dev/stdin', 'utf8'))
