const main = (input) =>  {
  const data = input.split(/\n/);
  const num = data[0]
  const hoge = data[1].split(/\s/).map((a) => parseInt(a, 10)).sort((a, b) => {
    if (a < b ) return 1;
    if (a > b ) return -1;
    return 0;
  })
  var res = 0;
  for (i = 0; i < num; i ++ ) {
    res += (hoge[i*2 + 1]);
  }
  console.log(res)
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));


