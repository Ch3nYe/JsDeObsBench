"use strict";

function main(input) {
  //かかる秒数　開業からの運行開始　運行間隔
  input = input.split(/\n/);
  const n = ~~input.shift();
  input = input.map(v => v.split(/\s/).map(x => ~~x));

  //[[12, 13, 1], [44, 17, 17], [66, 4096, 64]]
  let ans = "";
  for (let i = 0; i < input.length; i++) {
    let time = 0;
    let wait = 0;
    for (let j = i; j < input.length; j++) {
      time += time > input[j][1] ? 0 : input[j][1] - time;
      time += input[j][0];
    }
    ans += time + "\n";
  }

  ans += "0\n";

  console.log(ans);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
