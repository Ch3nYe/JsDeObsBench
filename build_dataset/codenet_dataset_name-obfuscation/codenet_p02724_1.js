function Main(input) {
  var joy = 0;
  joy += (Math.floor(input / 500)) * 1000;
  joy += Math.floor((input % 500) / 5) * 5;
  console.log(joy);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));