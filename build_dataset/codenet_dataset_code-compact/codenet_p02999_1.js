function Main(input) {
    var result;
    const X = parseInt(input[0])
    const A = parseInt(input[1])
    
    result = X < A ? 0 : 10;
    console.log(result);
}

// 1行入力の場合
// Main(require("fs").readFileSync("/dev/stdin", "utf8").trim());

// 改行で分割
// Main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split(/\n/));

// 改行・空白で分割
Main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split(/\n|\s/));