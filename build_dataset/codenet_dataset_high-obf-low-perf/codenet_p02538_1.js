function Main(input) {
  input = input.split("\n").map(v => v.split(" "));
  const [n, q] = input[0].map(v => +v);
  input.shift();
  
  
  const mod = 998244353;
  const str = (new Array(n)).fill(1);
  
  input.map(value => {
    const [l, r, d] = [(value[0] - 1), (value[1] - 1), +value[2]];
    for (let i = l; i <= r; i++) {
      str[i] = d;
    }

    let num = 0;
    for (let s = 0; s < n; s++) {
      num = (num * 10 + str[s]) % mod;
    }
    console.log(num);
  });  
}

function toInt(v) {
    //return BigInt(v);
    return parseInt(v, 10);
}
// 魔法
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
