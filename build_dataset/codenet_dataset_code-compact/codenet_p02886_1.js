// inputに入力データ全体が入る
function Main(input) {
  var input = input.split('\n');
  const n = Number(input[0])
  const ocps = input[1].split(' ').map(ocp => Number(ocp));
  var r = 0;
  for (var i = 0; i < n; i++) {
    for (var j = i+1; j < n; j++) {
      r += ocps[i] * ocps[j]
    }
  }
  console.log(r)
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));