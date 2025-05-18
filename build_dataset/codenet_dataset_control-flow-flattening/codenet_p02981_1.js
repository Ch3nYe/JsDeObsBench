var main = (standardInput) => {
    var lengthList = standardInput.split(' ');
	var n = Number.parseInt(lengthList[0]);
	var a = Number.parseInt(lengthList[1])
    var b = Number.parseInt(lengthList[2])
    
    if ( n*a >= b){
 	 console.log(b);
	} else {
  	 console.log(n*a)
 	}
    	
}
main(require('fs').readFileSync('/dev/stdin', 'UTF-8'));