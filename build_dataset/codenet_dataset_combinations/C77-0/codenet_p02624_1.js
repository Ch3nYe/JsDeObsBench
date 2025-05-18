function *main() {
  const N = +(yield);
  
  let sum = 0;
  for (let k = 1; k <= N; k++)
    sum += Math.floor(k * Math.floor(1+N/k) * Math.floor(N/k) / 2);
  
  console.log(sum);
}
const iter = main();
iter.next();
require("readline").createInterface({input: process.stdin}).on("line", line => iter.next(line));
