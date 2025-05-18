debug = false
function log(...args) {
  if (debug) {
    console.log(...args)
  }
}

function Main(input) {
  lines = input.split("\n")
  f = lines[0].split(" ")
  N = f[0]
  A = f[1] * 1
  B = f[2] * 1
  C = f[3] * 1
  D = f[4] * 1
  s = lines[1]
  log(N, A, B, C, D, s)

  bool = true
  if (C > D) {
    end = D
    if (C - D <= 2) {
      end = C
    }
    s2 = s
    if (s[D - 2] == '#') {
      log(s2, s2[D - 1])
      s2[D - 1] = '#'
      s2 = s2.slice(0, D - 1) + '#' + s2.slice(D)
    }
    log(s2)
    str = s2.slice(B - 1, end)
    log(str, bool)
    bool = bool && (/\.\.\./).test(str)
    log(str, bool)
  }
  str = s.slice(A - 1, C)
  bool = bool && !(/##/).test(str)
  log(str, bool)
  str = s.slice(B - 1, D)
  bool = bool && !(/##/).test(str)
  log(str, bool)

  ans = bool ? 'Yes' : 'No'
  console.log(ans)
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));