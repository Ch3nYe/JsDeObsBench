// inputに入力データ全体が入る
function Main(input) {
  var s, K, ref;
  ref = input.split("\n"), s = ref[0], K = parseInt(ref[1]);
  console.log(Array.from(s).map((v, i, arr)=> {
    var code = v.charCodeAt();
    if(i === arr.length - 1) {
      code += K%26;
      code -= code >122 ? 26 : 0;
      return String.fromCharCode(code);
    } else {
      if(v === "a") return v;
      return 123 - code <= K ? ((K -= 123 - code), "a") : v;
    }
  }).join(""));
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));