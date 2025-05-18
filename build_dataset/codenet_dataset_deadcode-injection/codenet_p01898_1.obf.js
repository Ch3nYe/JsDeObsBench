var a0_0x4d1af8 = a0_0x595b;
var input = require('fs')['readFileSync'](a0_0x4d1af8(0x0), 'utf8');
var arr = input[a0_0x4d1af8(0x1)]()[a0_0x4d1af8(0x2)]('\x0a');
var [m, n] = arr['shift']()[a0_0x4d1af8(0x2)]('\x20')[a0_0x4d1af8(0x3)](Number);
var yx = [];
function a0_0x5b09() {
    var _0x4ee0e4 = [
        '/dev/stdin',
        'trim',
        'split',
        'map',
        'push',
        'shift',
        'forEach',
        'log',
        'join',
        'length'
    ];
    a0_0x5b09 = function () {
        return _0x4ee0e4;
    };
    return a0_0x5b09();
}
for (var i = 0x0; i < m; i++)
    yx[a0_0x4d1af8(0x4)](arr[a0_0x4d1af8(0x5)]()[a0_0x4d1af8(0x2)](''));
function a0_0x595b(USLJRt, key) {
    var stringArray = a0_0x5b09();
    a0_0x595b = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x595b(USLJRt, key);
}
var memo = [];
for (var i = 0x0; i < m; i++) {
    for (var j = 0x0; j < n; j++) {
        if (i == 0x0)
            memo[a0_0x4d1af8(0x4)]([
                i,
                j
            ]);
        if (yx[i][j] == 'o') {
            [
                [
                    0x0,
                    -0x1
                ],
                [
                    0x0,
                    0x1
                ]
            ][a0_0x4d1af8(0x6)](v => {
                var _0x3869fd = a0_0x595b;
                var y = i + v[0x0];
                var x = j + v[0x1];
                if ((y < 0x0 || x < 0x0 || y >= m || x >= n) == ![])
                    memo[_0x3869fd(0x4)]([
                        y,
                        x
                    ]);
            });
        } else if (yx[i][j] == 'x') {
            for (var ii = -0x1; ii <= 0x1; ii++)
                for (var jj = -0x1; jj <= 0x1; jj++) {
                    if (ii == 0x0 && jj == 0x0)
                        continue;
                    var y = i + ii;
                    var x = j + jj;
                    if (y < 0x0 || x < 0x0 || y >= m || x >= n)
                        continue;
                    memo[a0_0x4d1af8(0x4)]([
                        y,
                        x
                    ]);
                }
        }
    }
}
memo[a0_0x4d1af8(0x6)](v => {
    yx[v[0x0]][v[0x1]] = 'b';
});
console[a0_0x4d1af8(0x7)](yx[a0_0x4d1af8(0x8)]('')['replace'](/[^-]/g, '')[a0_0x4d1af8(0x9)]);