function Main(input) {
	input = input.trim();
  var tate = parseInt(input.split("\n")[0].split(" ")[0]);
  for(var i = 1; i <= tate; i++){
    console.log(input.split("\n")[i]);
    console.log(input.split("\n")[i]);
  }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
