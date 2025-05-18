const input = require("fs").readFileSync("/dev/stdin", "utf8")

;(input => {
  
  const [A, B, C, D, E, F] = input.trim().split(' ').map(Number)

  let W = {}
  let S = {}
  
  for (let i = 1; i < F; i ++) {
    for (let j = 0; j < F; j++) {
      const s = A * i * 100 + j * B * 100
      if (s > F) break
	  W[s] = 1
    }
  }
  
  const p = F * E / 100
  for (let i = 0; i < F; i ++) {
    for (let j = 0; j < F; j++) {
      const s = C * i + D * j
      if (s > p) break
	  S[s] = 1
    }
  }

  let ans = [A * 100, 0]
  let max = 0
  let r = E / 100
  for (let i in W) {
    for (let j in S) {
      const t = (i - 0) + (j - 0)
      const sw = j / i
      if (sw > r || t > F) continue
      if (sw > max) {
        max = sw
	    ans = [t, j]
      }
    }
  }
  
  console.log(ans[0], ans[1])
  
    
})(input)
