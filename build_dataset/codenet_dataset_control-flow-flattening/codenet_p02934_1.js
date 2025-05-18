function Main(input) {
    var input = input.split("\n");
    const num = input[0];
    const arr = input[1].split(" ");
    var a = 1;
    var b = 0;
    arr.forEach(i => a *= i);
    for(var i=0; i<arr.length; i++){
        b += a / arr[i];
    }
    console.log(a/b);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));