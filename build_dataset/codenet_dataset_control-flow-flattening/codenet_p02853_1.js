function Main(input) {
  const chars = input.trim().split(' ');

  const x = Math.floor(chars[0]);
  const y = Math.floor(chars[1]);
  
  let ans = 0;
  
  if (x === 1 && y === 1) {
    ans += 400000;
  }
  
  if (x === 1) ans += 300000;
  if (y === 1) ans += 300000;
  if (x === 2) ans += 200000;
  if (y === 2) ans += 200000;
  if (x === 3) ans += 100000;
  if (y === 3) ans += 100000;
  
  console.log(ans);
}
Main(require('fs').readFileSync('/dev/stdin', 'utf8'));