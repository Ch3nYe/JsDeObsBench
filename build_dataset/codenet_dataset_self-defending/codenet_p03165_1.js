function main(input){
  const lines = input.split('\n');
  const S = lines.shift().split('');
  const T = lines.shift().split('');

//  console.log(S);
//  console.log(T);

  dp = []
  for(var i=0;i<=S.length;i++){
    dp.push( Array(T.length+1).fill(0) );
  }

  for(var i=1;i<=S.length;i++){
    for(var j=1;j<=T.length;j++){
      if(S[i-1]==T[j-1]){
        dp[i][j]=Math.max(dp[i][j], dp[i-1][j-1]+1);
      }else{
        dp[i][j]=Math.max(dp[i-1][j], dp[i][j-1]);
      }
    }
  }

  var i = S.length;
  var j = T.length;
  var result = [];
  while(i!=0 &&  j!=0){
//  console.log([i,j]);
//  console.log([S[i-1],T[j-1]]);
    if(S[i-1]==T[j-1]){
      result.unshift(S[i-1]);
      i--;
      j--;
    }else{
      if(dp[i-1][j] < dp[i][j-1]){
        j--;
      }else{
        i--;
      }
    }
  }

//  console.log(dp);
  console.log(result.join(''));
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
