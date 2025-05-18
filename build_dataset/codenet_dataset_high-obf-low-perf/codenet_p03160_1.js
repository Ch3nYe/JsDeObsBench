function Main(input) {
    input = input.trim().split("\n").map(function(x) { return x.split(" ")});

    let N = parseInt(input[0][0], 10);
    let v_h = input[1].map(e => parseInt(e, 10));

    let DP = [0, Math.abs(v_h[1] - v_h[0])];

    let x1, x2;
    for(let i = 2; i < N; i++){
        x1 = DP[i - 2] + Math.abs(v_h[i] - v_h[i - 2]);
        x2 = DP[i - 1] + Math.abs(v_h[i] - v_h[i - 1]);
        DP.push(Math.min(x1, x2));
    }

    console.log(DP[N - 1]);

}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
