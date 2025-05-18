function Main(impu) {
	let imput = impu.split("\n");
	let name = imput[0].split(" ");
	let count = imput[1].split(" ");
	
	if(name[0] === imput[2]) 
		count[0]--;
	else
		count[1]--;
	
	console.log(count[0] + " " + count[1]);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));