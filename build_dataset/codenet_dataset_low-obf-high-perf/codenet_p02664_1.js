function Main(str) {
  	let newString = '';
	for(let i=0;i<str.length;i++) {
    	if(str[i] === '?' && (str[i-1] && str[i-1] === 'P' || str[i+1] && str[i+1] === 'P')) {
        	newString = newString + 'D';
        } else if(str[i] == '?') {
        	newString = newString + 'P';
        } else {
        	newString = newString + str[i];
        }
    }
  
  	console.log(newString);
  	
}

let input = require('fs').readFileSync('/dev/stdin', 'utf8');
Main(input);
