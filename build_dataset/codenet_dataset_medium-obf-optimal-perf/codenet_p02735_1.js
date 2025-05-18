inp = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n')
l = inp.shift().split(' ')
H = l.shift() * 1
W = l.shift() * 1 
l = []
m = []
for (i=0; i<H; i++) {
  l.push(inp.shift().split(''))
  m[i] = []
  for (j=0; j<W; j++) {
      m[i][j] = 0 
  }
}
if (l[0][0] == "#") {
    m[0][0] = 1
}
r = 0
for (c=1; c<W; c++) {
  m[r][c] = l[r][c-1] == l[r][c] ? m[r][c - 1] : m[r][c - 1] + 1 
}
c = 0
for (r=1; r<H; r++) {
  m[r][c] = l[r-1][c] == l[r][c] ? m[r - 1][c] : m[r - 1][c] + 1 
}
for (i=1; i<H; i++) {
    r = i
    for (c=i; c<W; c++) {
      s = l[r][c-1] == l[r][c] ? m[r][c - 1] : m[r][c - 1] + 1
      t = l[r-1][c] == l[r][c] ? m[r-1][c] : m[r-1][c] + 1
      m[r][c] = Math.min(s, t)
    }
    c = i
    for (r=i; r<H; r++) {
      s = l[r-1][c] == l[r][c] ? m[r - 1][c] : m[r - 1][c] + 1
      t = l[r][c-1] == l[r][c] ? m[r][c- 1] : m[r][c-1] + 1
      m[r][c] = Math.min(s, t)
    }
}
console.log(Math.ceil(m[H-1][W-1] / 2))