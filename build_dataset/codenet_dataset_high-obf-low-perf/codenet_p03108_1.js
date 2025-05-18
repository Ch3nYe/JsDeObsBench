"use strict";

// read lines from stdin
const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map((val) => parseInt(val), 10));

const N = input[0][0];
const M = input[0][1];

const ans = [];

// Union-Find

const par = [];

for (let i = 1; i <= N; i++) {
  par[i] = -1;
}

function root(x) {
  if (par[x] < 0) { return x; }
  return par[x] = root(par[x]);
}

function unite(x, y) {
  const rx = root(x);
  const ry = root(y);
  if (rx === ry) { return; }

  par[ry] += par[rx];
  par[rx] = ry;
}

function isSame(x, y) {
  return root(x) === root(y);
}

function getSize(x) {
  return -par[root(x)];
}

// end Union-Find

ans[M] = N * (N - 1) / 2;

for (let i = M; i > 1; i--) {
  const x = input[i][0];
  const y = input[i][1];

  if (isSame(x, y)) {
    ans[i - 1] = ans[i];
    continue;
  }

  ans[i - 1] = ans[i] - (getSize(x) * getSize(y));
  unite(x, y);
}

for (let i = 1; i <= M; i++) {
  console.log(ans[i]);
}
