function Main(input) {
  input = input.trim().split('\n')
  const N = parseInt(input[0])
  const array = input[1].split(' ')
  const S = array[0]
  const T = array[1]
  let ans = ''
  for(let i = 0; i < N; ++i) {
    ans += S[i]
    ans += T[i]
  }
 
  console.log(ans)
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));