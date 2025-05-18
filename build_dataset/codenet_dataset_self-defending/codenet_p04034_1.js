input = require('fs').readFileSync('/dev/stdin', 'utf8')
lines = input.split('\n')
line = lines.shift().split(' ')
N = line[0] * 1
M = line[1] * 1
b = []
r = []
for (i=1; i<=N; i++) {
    b[i] = 1
    r[i] = 0
}
r[1] = 1
for (i=0; i<M; i++) {
  l = lines[i].split(' ')
  x = l[0] * 1
  y = l[1] * 1
  if (r[x]) {
      r[y] += 1
  }
  if (r[x] && b[x] == 1) {
      r[x] = 0
  }
  b[x] -= 1
  b[y] += 1
}
cnt = 0
for (i=1; i<=N; i++) {
    if (r[i] > 0) {
        cnt++
    }
}
console.log(cnt)