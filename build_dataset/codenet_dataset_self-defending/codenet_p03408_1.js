// https://atcoder.jp/contests/abc091/tasks/abc091_b
"use strict";
function Main(input) {
  const params = input.trim().split("\n");
  const N = Number(params[0].trim());
  const M = Number(params[N + 1].trim());
  const blueCards = params.slice(1, N + 1);
  const redCards = params.slice(N + 2);

  let cardCount = {};
  for (const card of blueCards) {
    const c = card.trim();
    if (cardCount.hasOwnProperty(c)) {
      cardCount[c] = cardCount[c] + 1;
    } else {
      cardCount[c] = 1;
    }
  }

  for (const card of redCards) {
    const c = card.trim();
    if (cardCount.hasOwnProperty(c)) {
      cardCount[c] = cardCount[c] - 1;
    } else {
      cardCount[c] = 1;
    }
  }

  let maxMoney = 0;
  for (const [key, money] of Object.entries(cardCount)) {
    if (maxMoney < money) {
      maxMoney = money;
    }
  }

  console.log(maxMoney);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
