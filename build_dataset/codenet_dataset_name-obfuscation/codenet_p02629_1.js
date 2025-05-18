function Main(inputs) {
	const inputline = inputs.split("\n").map(x => parseInt(x, 10));
  	const line = inputline[0];
  
  	function base26(number) {
    	let remainder26 = number % 26;
    	let division26 = Math.floor(number / 26) ;
    	let output = (remainder26 != 0) ? String.fromCharCode(64 + remainder26) : (--division26, 'Z');
      	return output = (division26 != 0) ? base26(division26) + output : output;
	}
  
  	console.log(base26(line).toLowerCase());
}
 
Main(require("fs").readFileSync("/dev/stdin", "utf8"));