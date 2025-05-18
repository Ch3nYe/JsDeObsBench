// inputに入力データ全体が入る
function Main(input) {
  input = input.split("\n");
  tmp = input.shift();
  N = parseInt(tmp.split(" ")[0]);
  M = tmp.split(" ")[1];
  S = input;
  A = "n".repeat(N).split("");
  flag = true;
  S.forEach(v => {
    t = v.split(" ").map(v => parseInt(v));
    if (A[t[0] - 1] != "n" && A[t[0] - 1] != t[1]) flag = false;
    A[t[0] - 1] = t[1];
  });

  A = A.join("");
  A = A.replace(/^nn([0-9])/, "10$1");
  A = A.replace(/^n([0-9])/, "1$1");
  A = A.replace(/n/g, "0");
  A = parseInt(A);
  if (flag && (A + "").length == N) {
    console.log(A);
  } else {
    console.log(-1);
  }
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
