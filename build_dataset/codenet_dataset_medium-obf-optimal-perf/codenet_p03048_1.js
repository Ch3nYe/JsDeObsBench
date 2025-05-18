function main(input){
  const args = input.split(' ');
  const R = parseInt(args[0], 10),
        G = parseInt(args[1], 10),
        B = parseInt(args[2], 10),
        N = parseInt(args[3], 10);
  
  var s = 0;
  var k = 0;
  for (var i = 0; i <= (N / R | 0); ++i){
    for (var j = 0; j <= (N / G | 0); ++j){
      k = ((N - i*R - j*G) / B) | 0;
      if (k >= 0 && i*R + j*G + k*B == N) ++s;
    }
  }
  console.log(s);
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
