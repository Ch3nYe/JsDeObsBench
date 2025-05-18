function Main(input) {
	input = input.split("\n");
	const input1 = input[0].split(" ")
	const N = parseInt(input1[0])
	const K = parseInt(input1[1])
	const As = input[1].split(" ").map(x => parseInt(x))

	var count = 0
	for(i=0; i < N; i++){
		var u = As.slice(i+1).filter(x => x < As[i]).length
		var v = As.filter(x => x < As[i]).length
		count += (u * K) % (1000000000 + 7);
		count += (v * (K-1)*K / 2) % (1000000000 + 7);
		count = count % (1000000000 + 7);
	}

	console.log(count)

}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));