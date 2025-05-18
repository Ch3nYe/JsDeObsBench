function Main(input) {
  const numbers = input.split(' ').map(n => Number(n));
  const p1 = numbers[0] * numbers[1];
  const p2 = numbers[2];

  if (p1 > p2) {
    console.log(p2);
  } else {
    console.log(p1);
  }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));