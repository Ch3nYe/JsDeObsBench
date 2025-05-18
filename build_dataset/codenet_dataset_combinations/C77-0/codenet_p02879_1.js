// inputに入力データ全体が入る
function Main(input) {
  var input = input.split(' ')
  var a = Number(input[0])
  var b = Number(input[1])
  if (a > 9 || b > 9){
    console.log(-1)
  	return;
  }
  var result = a * b;
  console.log(result);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));