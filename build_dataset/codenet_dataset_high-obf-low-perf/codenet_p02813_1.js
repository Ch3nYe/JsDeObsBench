'use strict';

const permutation = ({ result = [], pre = [], post, n = post.length }) => {
  if (n > 0) {
    post.forEach((_, i) => {
      const rest = [...post];
      const elem = rest.splice(i, 1);
      permutation({ result, pre: [...pre, ...elem], post: rest, n: n - 1});
    });
  } else {
    result.push(pre);
  }
  return result;
};

function Main(inputs) {
  // 1行目がinput[0], 2行目がinput[1], …に入る
  const input = inputs.split("\n");
  const n = Number(input[0]);
  const p = input[1];
  const q = input[2];

  const perm = permutation({ post: (new Array(n)).fill(0).map((_, i) => (i + 1)) }).map((v) => (v.join(' ')));
  const a = perm.indexOf(p);
  const b = perm.indexOf(q);

  console.log(Math.abs(a - b));
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
