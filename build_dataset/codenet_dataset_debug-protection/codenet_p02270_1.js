(function main(){
  let lines = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split("\n");
  let [n, k] = lines.shift().split(' ').map(Number);
  let w = lines.map(Number);

  const canAllStack = (p) => {
    let cnt = 0, sum = 0;
    for (let i = 0; i < k; i++) {
      for (sum = 0; sum + w[cnt] <= p;) {
        sum += w[cnt++]
        if (cnt === n) return n;
      }
    }
    return cnt;
  };

  let mid, left = 0, right = 1e9;
  while (right - left > 1) {
    mid = (right + left) / 2;
    if (canAllStack(mid) >= n) right = mid;
    else left = mid;
  }
  console.log(Math.floor(right));
})();
