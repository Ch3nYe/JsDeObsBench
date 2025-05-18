function Main(input) {
  input = input.split('\n');

  var a = parseInt(input[0].split(' ')[0], 10);
  var b = parseInt(input[0].split(' ')[1], 10);
  var s = input[1];

  var regex = new RegExp(`^[0-9]{${a}}-[0-9]{${b}}$`, 'g');
  var f = s.match(regex);

  console.log(f == null ? 'No' : 'Yes');
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
