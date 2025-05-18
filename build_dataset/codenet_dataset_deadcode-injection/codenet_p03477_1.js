function Main(input) {
  const numbers = input.split(' ').map(n => Number(n));
  const l = numbers[0] + numbers[1];
  const r = numbers[2] + numbers[3];
  if (l > r) {
    console.log('Left');
  } else if (l < r) {
    console.log('Right');
  } else {
    console.log('Balanced');
  }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));