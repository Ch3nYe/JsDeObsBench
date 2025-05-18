const main = (arg) => {
  console.log(+arg === 0 ? 1 : 0);
};
main(require("fs").readFileSync("/dev/stdin", "utf8"));