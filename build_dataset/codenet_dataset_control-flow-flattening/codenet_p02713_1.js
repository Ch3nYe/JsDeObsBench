function Main(input) {
  const k = input;
  let sum = 0;

  const dv = n => {
    const divisors = [];
    const s = Math.sqrt(n);

    for (let i = 1; i <= s; i++) {
      if (n % i === 0) {
        if (i === n / i) {
          divisors.push(i);
        } else {
          divisors.push(i, n / i);
        }
      }
    }

    return divisors;
  }

  const gcd = (a, b, c) => {
    const min = Math.min(a, b, c);
    const dvmin = dv(min);
    const candidate = [];

    dvmin.forEach(i => {
      if (a % i === 0 && b % i === 0 && c % i === 0) {
        candidate.push(i);
      }
    })

    return Math.max(...candidate);
  }

  for (let a = 1; a <= k; a++) {
    for (let b = 1; b <= k; b++) {
      for (let c = 1; c <= k; c++) {
        sum += gcd(a, b, c);
      }
    }
  }

  console.log(sum);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));