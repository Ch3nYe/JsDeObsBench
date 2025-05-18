function Main(str) {
  	let zero = 0;
  	let one = 0;
  	for(let i=0;i<str.length;i++) {
    	if(str[i] === '1') {
        	one++;
        } else if(str[i] === '0') {
        	zero++;
        }
    }
  
  	console.log(Math.abs(one - zero));
}

let input = require('fs').readFileSync('/dev/stdin', 'utf8');
Main(input);
