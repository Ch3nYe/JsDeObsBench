function Main(input) {
  const array = input.trim().split(' ').map(s => parseInt(s))
  const N = array[0]
  var A = array[1]
  var B = array[2]

  var ans = 0
  var dist = B - A
  if (dist % 2) {
    var diff = Math.min(N - B, A - 1) + 1
    ans += diff
    ans += Math.floor((B - A - 1)/2)
  } else {
    ans = dist / 2
  }
  console.log(ans)
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));