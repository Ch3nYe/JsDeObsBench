//他人のソース
function main(input){
  const lines = input.split('\n');
  const NW = lines.shift().split(' ').map(x => parseInt(x));
  const N = NW[0]
  const W = NW[1]
  const items = lines.map(line => line.split(' ').map(x => parseInt(x)) );

//console.log(N);
//console.log(W);
//console.log(items);

  dp = []
  for(var i=0;i<W+1;i++){
    dp.push( Array(N+1).fill(0) );
  }

  var result = 0;
  for(var i=0;i<N;i++){
    for(var w=0;w<=W;w++){

      var weight = items[i][0]
      var value = items[i][1]

      if(weight <= w){
        dp[w][i+1] = Math.max(dp[w][i], dp[w-weight][i] + value);
      }else{
        dp[w][i+1] = dp[w][i];
      }

      if(dp[w][i+1] > result){result = dp[w][i+1];}

    }
  }

//  const result = Math.max( ...dp.map(arr => Math.max(...arr)) )
  console.log(result);

}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));

