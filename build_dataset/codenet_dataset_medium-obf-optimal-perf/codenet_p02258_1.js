function main(input) {
  input = input.split("\n");
  var values = input.map(function(v) { return parseInt(v); });

  var min = Number.MAX_VALUE, val = -Number.MAX_VALUE;
  var N = values[0];
  for (var i = 1; i <= N-1; i++) {
    if (min >= values[i]) {
      min = values[i];
    }
    if (values[i+1] - min >= val) {
      val = values[i+1] - min;
    }
  }
  console.log(val);
  return val;
}
main(require("fs").readFileSync("/dev/stdin", "utf8"));