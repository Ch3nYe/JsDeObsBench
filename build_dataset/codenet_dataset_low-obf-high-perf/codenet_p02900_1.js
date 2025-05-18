function Main(input) {
  input = input.split(' ').map(x => x*1);
   
  // Eulidean Algorithm
  function gcd(a1, a2) {
    return a2 == 0 ? a1 : gcd(a2, a1 % a2);
  }

  var result = gcd(input[0], input[1]);
  var answer = 1;

  for(var i = 2; i * i < result; i++) {
    if(result % i === 0) {
      answer++;
      while(result % i === 0) {
        result /= i;
      }
    }
  }
  if( result !== 1) {
    answer++;
  }

  console.log(answer);


}
Main(require('fs').readFileSync('/dev/stdin', 'utf-8'));
