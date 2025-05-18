function main (input) {
  var line = input.split('\n').map(n => parseInt(n, 10));  

  while(line[0] > 500) {
    line[0] -= 500;
  }

  line[0]<=line[1] ? console.log('Yes') : console.log('No');
  
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));