inp = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n')
l = inp.shift().split(' ')
N = l.shift() * 1
P = l.shift() * 1

// 素因数分解
_primFactors = function(n) {
  var arr = []
  if (n == 1) {
      return [{n:1, r:1}]
  }
  s = n

  var i = 2
  r = 0
  if (n % i === 0) {
    do {
      r++
      n /= i
    } while(n%i===0)
    arr.push({n: i, r: r})
  }
  
  for (i = 3; i*i <= s; i+=2) {
    r = 0
    if (n % i === 0) {
       do {
           r++
           n /= i
       } while(n%i===0)
       arr.push({n: i, r: r})
    }
  }
  if (n > 1) {
      arr.push({n: n, r: 1})
  }
  return arr
}

arr = _primFactors(P)
ans = 1
for (i=0; i<arr.length;i++) {
    a = arr[i]
    r = a.r
    while (r>=N) {
        ans *= a.n
        r -= N
    }
}
console.log(ans)