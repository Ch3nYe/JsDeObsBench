function Main(input) {
    var data = input.split("\n")
    var split = parseInt(data[0])/2;
	var cdn = [];
	for (let i = 0; i < data[1].length; i+=split) {
    	cdn.push(data[1].slice(i, i+split));
	}
	if(cdn[0]==cdn[1]) {
		console.log('Yes');
	}else{
		console.log('No');
	}
}

// Don't edit this line!
Main(require("fs").readFileSync("/dev/stdin", "utf8"));