function Main(input) {
  const inputs = input.split('\n')
    .filter(v => v);
  const n = Number(inputs[0]);
  const strs = inputs[1]
    .split('');
  
  console.log(strs.map(function(s) {
    let c = s.charCodeAt() + n;
    if (c > 90) {
      c -= 26;
    }
    return String.fromCharCode(c)
  }).join(''));
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));