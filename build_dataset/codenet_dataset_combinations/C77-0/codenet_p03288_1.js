function main(input) {
  var R = input[0]-0;
  if(R<1200) console.log('ABC');
  else if(R<2800) console.log('ARC');
  else console.log('AGC');
}
main(require('fs').readFileSync('/dev/stdin', 'utf8').trim().split("\n"))
