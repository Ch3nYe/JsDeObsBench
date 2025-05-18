function Main(input) {
  var input = input.split('\n');

  var ballXList = input[2].split(' ');
  var ret = 0;
  for (var i = 0; i < input[0]; i++) {
    var aDistance = ballXList[i];
    var bDistance = input[1] - ballXList[i];
    var ret = ret + (aDistance < bDistance ? aDistance : bDistance) * 2;
  }

  console.log(ret);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));