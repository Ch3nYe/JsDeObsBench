const main = (input) => {
  const N = Number(input);

  console.log(calc(N, "", 0));
}

var map = {}; // 最後の4文字+文字数
var w = ['A','C','G','T'];
function calc(N, lst4, cnt){
  var key = lst4 + "_" + cnt;
  if(map[key]) return map[key];
  if(cnt == N) {
//    console.log(lst4);
    return 1;
  }
  var ans = 0;
  for(var i=0;i<4;i++){
    var next = lst4+w[i];
    var next3 = (next).slice(-3);
    var next4 = (next).slice(-4);
    if(
      next3[0]+next3[1]+next3[2] != 'AGC' &&
      next3[0]+next3[2]+next3[1] != 'AGC' &&
      next3[1]+next3[0]+next3[2] != 'AGC' &&

      next4[0]+next4[1]+next4[3] != 'AGC' &&
      next4[0]+next4[2]+next4[3] != 'AGC'
    ){
      ans += calc(N, next.slice(-4), cnt+1);
      ans %= 1000000007;
    }
  }
  map[key] = ans;
  return ans;
}

main(require('fs').readFileSync('/dev/stdin', 'UTF-8'));
