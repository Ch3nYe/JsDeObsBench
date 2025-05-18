function Main(input) {
  input = input.split("\n");
  var [n, q] = input[0].split(" ").map(a => parseInt(a, 10));
  var colors = input[1].split(" ");
  for (var i = 0; i<q; i++) {
    var [start, end] = input[i+2].split(" ").map(a => parseInt(a, 10));
    var cs = [];
    for (var j = start - 1; j<end; j++) {
      var color = colors[j];
      if (cs.indexOf(color) === -1) {
        cs.push(color);
      }
    }
    console.log(cs.length);
  }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));