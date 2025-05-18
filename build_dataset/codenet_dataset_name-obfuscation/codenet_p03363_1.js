"use strict";
// 人様のコード参照
const main = arg => {
  	// お決まりの処理たち
    arg = arg.trim().split("\n");
    const N = arg[0] * 1;
    const nums = arg[1].split(" ").map(x => x*1);
  	// とりあえず累積和出してみる
  	const totalSum = new Array(N).fill(0);
   	// forEachよくないんじゃないか説
  	for(let i = 0; i < N; i++){
      totalSum[i] += (totalSum[i - 1] || 0) + nums[i];
    }
  
  	// それぞれの組み合わせがいくつずつかを調べていく
  	// そのためにオブジェクト化
  	let accumObj = {};
  	// accumObj[0]は必ず存在している体で（理由は不明確）
  	accumObj[0] = 1;
  	for(let i = 0; i < N; i++){
      accumObj[totalSum[i]] = (accumObj[totalSum[i]] || 0) + 1;
    }
  	let ans = 0;
  	// それぞれのエンティティで2つとってくる値を計算する
  	Object.keys(accumObj).forEach((x)=> {
    	ans += accumObj[x]*(accumObj[x]-1)/2
    })
  
  	console.log(ans);
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));
