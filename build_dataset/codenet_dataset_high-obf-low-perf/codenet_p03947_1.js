// inputに入力データ全体が入る
function Main(input) {

var counter = function(str,seq){
    return str.split(seq).length - 1;
};
	lines = input.split("\n"); // 1行目がinput[0], 2行目がinput[1], …に入る
	var s = lines[0];
	var bw = counter(s,"BW");
	var wb = counter(s,"WB");
	console.log(bw+wb);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));