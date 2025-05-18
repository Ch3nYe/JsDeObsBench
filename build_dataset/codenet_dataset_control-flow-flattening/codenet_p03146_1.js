const collatz = (n) => {
  if (n % 2 === 0) {
    n /= 2
  } else {
    n = 3 * n + 1
  }

  return n
}

const main = stdin => {
  const input = stdin.trim().split('\n')
  const s = parseInt(input[0])

  if (s === 1 || s === 2 || s === 4) {
    console.log(4)
    return
  }

  let tmp = s
  let first = 0
  let second = 0
  for (let i = 1; ; i++) {
    if (tmp === 4 && first === 0) {
      first = i
    } else if (tmp === 4 && first !== 0) {
      second = i
      break
    }
    tmp = collatz(tmp)
  }

  console.log(second)
}
// 標準入力
main(require("fs").readFileSync("/dev/stdin", "utf8"))
