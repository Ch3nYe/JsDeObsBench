function myout(text){console.log(text);}//standard output
function Main(input) {
	//input = parseInt(input);
	//input = input.trim().split(" ");
	input = input.trim().split("\n");
	//input = input.trim().split(" ").map((a)=>Number(a));
	//input = input.trim().split("\n").map((a)=>Number(a));
  var N = parseInt(input[0]);
  var list = input[1].split(" ").map((a)=>Number(a));
  var ave;
  var sum = 0;
  var output = 0;
  for(var i = 0; i < list.length; i++){
    sum += list[i];
  }
  ave = Math.round(sum / N);
  for(var i = 0; i < list.length; i++){
    output += Math.pow((list[i] - ave),2);
  }
  myout(output);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").trim());
