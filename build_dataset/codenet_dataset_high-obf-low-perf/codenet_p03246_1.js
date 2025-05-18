line = require('fs')
  .readFileSync('/dev/stdin', 'utf8')
  .split('\n')

n = parseInt(line[0])
v = line[1].split(' ')

var odds = {}
var even = {}
for (var i = 0; i < v.length; i++) {
  di = i & 1 ? even : odds
  di[v[i]] = !di[v[i]] ? 1 : di[v[i]] + 1
}

var a = []
var b = []
for (var k in odds) a.push({ v: k, n: odds[k] })
for (var k in even) b.push({ v: k, n: even[k] })

a.sort((x, y) => y.n - x.n)
b.sort((x, y) => y.n - x.n)

va = a[0]
vb = b[0]
if (va.v === vb.v) {
  if (va.n > vb.n) vb = !b[1] ? { n: 0 } : b[1]
  else va = !a[1] ? { n: 0 } : a[1]
}

log = console.log
// log('n', n)
// log('v', v)
// log('sorted', a, b)
// log('select', va, vb)
log(n / 2 - va.n + n / 2 - vb.n)
