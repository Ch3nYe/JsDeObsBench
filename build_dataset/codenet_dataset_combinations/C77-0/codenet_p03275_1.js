function median (l) {
  return l.sort()[Math.floor(l.length / 2)]
}

function Main(input) {
  input = input.split("\n")
  N = parseInt(input[0])
  a = input[1].split(" ")
  m = []

  for (var i = 0 ; i < N ; i++ ) {
    for (var j = i + 1 ; j < N + 1 ; j++ ) {
      m.push(median(a.slice(i, j)))
    }
  }
  console.log(median(m))
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
