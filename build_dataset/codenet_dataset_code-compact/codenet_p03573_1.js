function Main(input) {
  const numbers = input.split(' ').map(n => Number(n));
  const a = numbers[0];
  const b = numbers[1];
  const c = numbers[2];

  if (a === b) {
    console.log(c);
  } else if (b === c) {
    console.log(a);
  } else {
    console.log(b);
  }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));