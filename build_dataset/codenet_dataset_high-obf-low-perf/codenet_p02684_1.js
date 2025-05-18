function main(input) {
  const lines = input.trim().split("\n");
  let [n, k] = lines[0].split(' ');
  n = +n;
  k = BigInt(k);
  const towns = lines[1].split(' ').map(Number);

  const visited = new Map();
  let pos = 1;
  while (k > 0) {
    const i = visited.get(pos);
    if (!i) {
      visited.set(pos, BigInt(visited.size));
      pos = towns[pos - 1];
      k--;
    } else {
      const cycle = BigInt(visited.size) - i;
      const rest = k % cycle;
      for (let [key, value] of visited) {
        if (value == i + rest) {
          pos = key;
          break;
        }
      }
      k = 0;
    }
  }
  
  console.log(pos);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));