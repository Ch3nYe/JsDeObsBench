// inputに入力データ全体が入る
function Main(input) {
	// 1行目がinput[0], 2行目がinput[1], …に入る
	input = input.split("\n");
	tmp = input[0].split(" ");
	//文字列から10進数に変換するときはparseIntを使います
	var N = parseInt(tmp[0], 10);
	var M = parseInt(tmp[1], 10);

    var divisors = divisor(M);
    var max = 0;
            for (var i =0;i < divisors.length;i++) {
                var d = divisors[i];
                if (M / d >= N) {
                    max = Math.max(max, d);
                }
            }

	//出力
	console.log('%d',max);
}
function divisor(n) {
        var res = [];
        for (var i = 1; i * i <= n; i++) {
            if (n % i == 0) {
                res.push(i);
                if (n / i != i) {
                    res.push(n / i);
                }
            }
        }
        return res;
    }

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
