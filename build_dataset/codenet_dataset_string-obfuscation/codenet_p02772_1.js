// inputに入力データ全体が入る
function Main(input) {
  input = input.split("\n");
  const N = input.shift();
  const A = input.map(v => parseInt(v));
  f = false;
  for (i = 0; i < A.length; i++) {
    if (A[i] % 2 == 0) {
      if (A[i] % 3 != 0 && A[i] % 5 != 0) {
        f = true;
      }
    }
  }
  if (f) {
    console.log("DENIED");
  } else {
    console.log("APPROVED");
  }
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
