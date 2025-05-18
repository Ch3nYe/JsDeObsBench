function main(input) {
  const formatted_input = input.split('\n');

  const N = parseInt(formatted_input[0], 10);
  const As = formatted_input[1].split(' ').map(x => parseInt(x));

  dp = [];

  for(var i=0;i<N;i++){
    var results = [];
    if(i==0){
      results=[As[i], As[i]*-1]
    }else{
      var not_flipped = Math.max(dp[i-1][0] + As[i], dp[i-1][1] - As[i]);
      var flipped = Math.max(dp[i-1][0] - As[i], dp[i-1][1] + As[i]);
      results = [not_flipped, flipped]
    }
    dp.push(results);
  }

  //console.log(dp);
  console.log(dp[N-1][0]);
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));


