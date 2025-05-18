function main(input) {
  
  var input = input;
  var sum = 0;
  for (var i=0;i<4;i++){
    if(input[i] == '+') {
    	sum += 1;
    } else {
    	sum -= 1;
    }
  }
  console.log(sum);
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));