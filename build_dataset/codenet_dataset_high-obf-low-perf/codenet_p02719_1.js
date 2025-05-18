function Main(input) {
	input = input.split("\n");
	tmp = input[0].split(" ");
	var N = Number(tmp[0])
    var K = Number(tmp[1])
    if(K === 1) return console.log(0)
    
    var current = Math.abs(N - K)
    N = current
    while(current >= N) {
      
      N = current
      current = Math.abs(N - K)
    }
  console.log(current)
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
