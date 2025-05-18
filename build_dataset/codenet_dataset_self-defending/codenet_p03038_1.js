var lines = [];

var readline = require('readline')
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


rl.on('line', (x) => {
    lines.push(x)
});

var A;
rl.on('close', () => {
    var N = Number(lines[0].split(" ")[0])
    var M = Number(lines[0].split(" ")[1])
    A = lines[1].split(" ").map(i => Number(i));

    lines.shift(); lines.shift()

    var BC = lines.map(i => i.split(" ").map(i => Number(i)));

    A.sort((a, b) => a - b);
    BC.sort((a, b) => b[1] - a[1]);

    var k = 0; var ans = 0;
    for (var i = 0; i < M; i++) {
        var b = BC[i][0]; var c = BC[i][1];
        var cnt = 1;

        for (var j = k; j < N; j++) {
            if (b < cnt) { k = j; break; }

            if (A[j] < c) { ans += c; }
            else { for (var x = j; x < N; x++) { ans += A[x] } console.log(ans); return (0) }

            cnt++;
        }
    }
    for (var x = j; x < N; x++) { ans += A[x] } console.log(ans);

});



