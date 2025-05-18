((input) => {
  const [S, T] = input.trim().split('\n');
  const sl = S.length;
  const tl = T.length;
  const range = sl - tl;
  let min = tl;

  for (let i = 0; i < range; i++) {
    const target = S.slice(i, tl + i);
    let diff = 0;
    for (let j = 0; j < tl; j++) {
      if (target[j] !== T[j]) diff += 1;
    }
    if (min > diff) {
      min = diff;
    }
   }

  console.log(min);
})(require("fs").readFileSync("/dev/stdin", "utf8"));