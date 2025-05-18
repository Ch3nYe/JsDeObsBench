const main = (input) =>  {
  const data = input.split(/\n|\s/).map((a) => parseInt(a, 10));
  const a = data[0];
  const b = data[1];
  if (a <= 0 && 0 <= b) {
    return "Zero"
  }

  if ((b - a) % 2  || a > 0) {
    return "Positive";
  } else {
    return "Negative";
  }
}

console.log(main(require("fs").readFileSync("/dev/stdin", "utf8")))



