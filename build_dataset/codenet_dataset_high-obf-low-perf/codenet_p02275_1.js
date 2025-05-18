(function main(){
  const lines = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
  const n = Number(lines.shift());
  const arr = lines.shift().split(' ').map(Number);
  const k = 10000;
  let cnt_arr = [];
  for (let i = 0; i <= k; i++) cnt_arr[i] = 0;
  for (let i = 0; i < n; i++) cnt_arr[arr[i]]++;
  for (let i = 1; i <= k; i++) cnt_arr[i] += cnt_arr[i - 1];
  let out_arr = [];
  for (let i = n - 1; i >= 0; i--) out_arr[--cnt_arr[arr[i]]] = arr[i];
  console.log(out_arr.join(' '));
})();

