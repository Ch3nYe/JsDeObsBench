  function f(use, x, n, acc) {
    if (x > n) return acc;
    if (use === 0b111) acc += 1;
    acc += f(use | 0b001, x * 10 + 3, n, 0);
    acc += f(use | 0b010, x * 10 + 5, n, 0);
   acc += f(use | 0b100, x * 10 + 7, n, 0);
    return acc;
  }

  function Main(input) {
    var n = parseInt(input);
    console.log(f(0, 0, n, 0));
  }

  //*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
  Main(require("fs").readFileSync("/dev/stdin", "utf8"));
