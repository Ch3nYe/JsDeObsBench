'use strict'

function main(s) {

  const x = Number(s);

  const ans = (x >= 1200) ? 'ARC' : 'ABC';

  console.log(ans);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
