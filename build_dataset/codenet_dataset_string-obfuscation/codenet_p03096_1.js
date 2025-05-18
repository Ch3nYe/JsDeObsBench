"use strict"
function Main(input){
  input=input.trim().split(/\s+/).map(x=>x-0);
  var N=input.shift();
  var last=[];//last[hoge]で色hogeの最後の位置
  for(let i=0;i<2000000;i++)last[i]="not yet";
  last[input[0]]=0;
  var dp=[1];//dp[i]で石0~iまでの色の塗られ方の場合の数
  var M=Math.pow(10,9)+7;
  for(let i=1;i<N;i++){
    let c=input[i];
    if(last[c]==="not yet"||last[c]===i-1){
      last[c]=i;
      dp[i]=dp[i-1];
      continue;
    }
    dp[i]=(dp[i-1]+dp[last[c]])%M;
    last[c]=i;
  }
  console.log(dp.pop());
}

Main(require("fs").readFileSync("/dev/stdin","utf8"));