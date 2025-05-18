const main = stdin => {
  const [A, B] = stdin.trim().split(' ').map(x => parseInt(x))
  console.log(A * B)
}

// 標準入力
main(require("fs").readFileSync("/dev/stdin", "utf8"))
