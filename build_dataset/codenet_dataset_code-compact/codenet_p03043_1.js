function main(input){
  input = input.split(' ').map(Number);
  const N = input[0];
  const K = input[1];
  
  var result = 0;
  
  for(i = 1;i <= N;i++){
    var tmp = 1/N;
  	var now = i;
  	while(now < K){
      now *= 2;
      tmp /= 2;
    }
    result += tmp;
  }
  
  console.log(result.toString().slice(0,14));
}
main(require('fs').readFileSync('/dev/stdin','utf8'));

