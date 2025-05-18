function Main(input) {
  var ab = input[0].split(" ");
  console.log((ab[0]<=8 && ab[1] <= 8) ? 'Yay!' : ':(')
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
