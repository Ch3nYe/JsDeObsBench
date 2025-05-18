function Main(input) {
  const k = input[0][1];

  /** @type {number[]} */
  const as = input[1].map(Number);

  const answer = as.reduce((total, cv, ci) => {
    var result = 0;

    as.slice(ci).reduce((pv, value, index) => {
      const remainder = (pv + value) % k;

      if (remainder === (index + 1)) {
        result++;
      }

      return remainder;
    }, 0);

    return total + result;
  }, null);

  console.log(answer);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n").map(line => line.split(' ')));