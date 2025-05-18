function main(input) {
  var N = input[0]-0;
  var ans = 0;
  for(var i=105;i<=N;i+=2){
    var cnt = 0;
    for(var j=1;j<=i;j++){
      if(i%j==0) cnt++;
      if(cnt>8) break;
    }
    if(cnt == 8) ans++;
  }
  console.log(ans);
}
main(require('fs').readFileSync('/dev/stdin', 'utf8').trim().split("\n"))
