function Main(input) {
    input = input.split("\n");
    input[0] = Number(input[0]);
    input[1] = Number(input[1]);
    input[2] = Number(input[2]);
    console.log((input[0] + input[1]) * input[2] / 2);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));