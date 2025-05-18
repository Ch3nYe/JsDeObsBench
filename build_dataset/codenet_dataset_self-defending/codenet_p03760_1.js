'use strict'

function main(s) {

  s = s.split('\n');

  const o = s[0].split('');
  const e = s[1].split('');

  let ans = '';

  for (let i = 0; i < o.length + e.length; i++) {
    if (o[i]) ans += o[i];
    if (e[i]) ans += e[i];
  }

  console.log(ans);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
