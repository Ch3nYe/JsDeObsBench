"use strict";
    
const main = arg => {
  // とりあえず切り分け
  let Nums = arg.split("\n")[0].split(" ").map(n => Number(n));  
  let A = Nums[0],B = Nums[1], C = Nums[2];
  let ans = "NO";
  // 解説見ての回答
  for(let i = 1; i<= B; i++){
  	if(A*i % B == C){
		ans = "YES"
    }
  }
  console.log(ans);
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
