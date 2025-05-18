inp = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n')
N = inp.shift() * 1
A = inp.shift().split(' ')
B = inp.shift().split(' ')
sumA = 0
sumB = 0
s = 0
t = []
cnt = 0
for (i=0; i<N; i++) {
  a = A[i] * 1
  b = B[i] * 1
  d = a - b
  if (d < 0) {
      cnt++
      s += d 
  } else {
      t.push(d)
  }
  sumA += a
  sumB += b
}

if (sumA >= sumB) {
  t.sort((a, b) => b - a)
  j = 0
  while (s < 0) {
      s += t[j]
      j++
  }
  console.log(cnt+j)
} else {
  console.log(-1)
}
