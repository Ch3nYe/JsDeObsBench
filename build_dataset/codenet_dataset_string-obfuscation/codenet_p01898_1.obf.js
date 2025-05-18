var a0_0x178cf8 = a0_0x2b82;
(function (stringArrayFunction, comparisonValue) {
    var _0x57eb12 = a0_0x2b82;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x57eb12(0x12c)) / 0x1 + parseInt(_0x57eb12(0x125)) / 0x2 * (parseInt(_0x57eb12(0x129)) / 0x3) + -parseInt(_0x57eb12(0x139)) / 0x4 + -parseInt(_0x57eb12(0x135)) / 0x5 * (-parseInt(_0x57eb12(0x12b)) / 0x6) + -parseInt(_0x57eb12(0x130)) / 0x7 + -parseInt(_0x57eb12(0x12e)) / 0x8 * (-parseInt(_0x57eb12(0x132)) / 0x9) + parseInt(_0x57eb12(0x126)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x57d8, 0x9e133));
var input = require('fs')[a0_0x178cf8(0x12a)]('/dev/stdin', a0_0x178cf8(0x136));
var arr = input[a0_0x178cf8(0x137)]()[a0_0x178cf8(0x138)]('\x0a');
var [m, n] = arr[a0_0x178cf8(0x131)]()[a0_0x178cf8(0x138)]('\x20')[a0_0x178cf8(0x133)](Number);
function a0_0x57d8() {
    var _0x2e5674 = [
        'trim',
        'split',
        '4661764FuEpks',
        '7610HcNHxi',
        '8430230jPPFDy',
        'forEach',
        'join',
        '939bAOtGk',
        'readFileSync',
        '270bAbUgD',
        '1274160CrJAPn',
        'log',
        '28664XTQTzx',
        'length',
        '731353IkiKOe',
        'shift',
        '936kEbEBT',
        'map',
        'push',
        '87215nUixWC',
        'utf8'
    ];
    a0_0x57d8 = function () {
        return _0x2e5674;
    };
    return a0_0x57d8();
}
var yx = [];
for (var i = 0x0; i < m; i++)
    yx['push'](arr[a0_0x178cf8(0x131)]()[a0_0x178cf8(0x138)](''));
var memo = [];
for (var i = 0x0; i < m; i++) {
    for (var j = 0x0; j < n; j++) {
        if (i == 0x0)
            memo[a0_0x178cf8(0x134)]([
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
            ][a0_0x178cf8(0x127)](v => {
                var y = i + v[0x0];
                var x = j + v[0x1];
                if ((y < 0x0 || x < 0x0 || y >= m || x >= n) == ![])
                    memo['push']([
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
                    memo[a0_0x178cf8(0x134)]([
                        y,
                        x
                    ]);
                }
        }
    }
}
function a0_0x2b82(oKinLX, key) {
    var stringArray = a0_0x57d8();
    a0_0x2b82 = function (index, key) {
        index = index - 0x125;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2b82(oKinLX, key);
}
memo['forEach'](v => {
    yx[v[0x0]][v[0x1]] = 'b';
});
console[a0_0x178cf8(0x12d)](yx[a0_0x178cf8(0x128)]('')['replace'](/[^-]/g, '')[a0_0x178cf8(0x12f)]);