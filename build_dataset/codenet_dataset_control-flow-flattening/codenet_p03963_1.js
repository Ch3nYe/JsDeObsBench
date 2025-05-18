function Main(input) {
    // 1行目がinput[0], 2行目がinput[1], …に入る
    var input = input.split("\n");
    var tmp = input[0].split(" ");
    var N = tmp[0];
    var K = tmp[1];

    var pattern = K;
    for (i = 1;i < N;i++) {
	pattern *= K - 1;
    }

    console.log(pattern);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
