function main(input) {
    var lines = input.split('\n');
    var line0 = lines[0].split(' ');
    var n = parseInt(line0[0]);
    var a = parseInt(line0[1]);
    var b = parseInt(line0[2]);
    var x = lines[1].split(' ').map(t => parseInt(t));

    var ans = 0;
    for (var i = 0; i < n - 1; i++) {
        ans += Math.min(a * (x[i + 1] - x[i]), b);
    }
    console.log(ans);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));