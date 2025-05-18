'use strict'

function main(input){
  const lines = input.split('\n');
  const N = lines[0].split(' ').map(x => parseInt(x))[0];
  const M = lines[0].split(' ').map(x => parseInt(x))[1];



  let result = ((N-M)*100 + M*1900)*Math.pow(2,M);

  console.log(result);

}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
