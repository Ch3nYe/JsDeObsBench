function main(input) {
  const idx = input.trim().split(' ').map(el => parseInt(el, 10)).findIndex(el => el === 0)
  console.log(idx + 1);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
