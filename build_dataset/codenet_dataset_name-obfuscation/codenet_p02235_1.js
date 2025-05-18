function lcs(x, y) {
    var m = x.length;
    var n = y.length;

    for (var i = 1; i <= m; i++) {
        c[i][0] = 0;
    }
    for (var j = 1; j <= n; j++) {
        c[0][j] = 0;
    }

    for (var i = 1; i <= m; i++) {
        for (var j = 1; j <=n; j++) {
            if (x[i] == y[j]) {
                c[i][j] = c[i - 1][j - 1] + 1;
            } else if (c[i - 1][j] >= c[i][j - 1]) {
                c[i][j] = c[i - 1][j];
            } else {
                c[i][j] = c[i][j - 1];
            }
        }
    }
}

var input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();
var lines = input.split('\n');

var n = +lines.shift() - 0;

for (var idx = 0; idx < n; idx++) {
    var a = lines.shift();
    var b = lines.shift();

    var c = [[0]];
    for (var i = 1; i <= a.length; i++) {
        var arr = [-1];
        c.push(arr);
    }
    lcs(a, b);
    console.log(c[a.length][b.length]);
}