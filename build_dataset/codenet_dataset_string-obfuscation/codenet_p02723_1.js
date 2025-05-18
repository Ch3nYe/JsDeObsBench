'use strict'
function main(inp) {
  let ans = "No";
  if(inp[2] === inp[3] && inp[4] === inp[5]){
  	ans = "Yes"
  }
  console.log(ans);
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
