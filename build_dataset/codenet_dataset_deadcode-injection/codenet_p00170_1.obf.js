var a0_0x24f68b = a0_0x13ab;
var input = require('fs')['readFileSync'](a0_0x24f68b(0x0), a0_0x24f68b(0x1));
function a0_0x13ab(lTbEcV, key) {
    var stringArray = a0_0x4274();
    a0_0x13ab = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x13ab(lTbEcV, key);
}
function a0_0x4274() {
    var _0x5931f9 = [
        '/dev/stdin',
        'utf8',
        'trim',
        'split',
        'map',
        'length',
        'concat',
        'slice',
        'filter',
        'push',
        'log',
        'join'
    ];
    a0_0x4274 = function () {
        return _0x5931f9;
    };
    return a0_0x4274();
}
var arr = input[a0_0x24f68b(0x2)]()[a0_0x24f68b(0x3)]('\x0a');
while (!![]) {
    var n = arr['shift']() - 0x0;
    if (n == 0x0)
        break;
    var nww = [];
    for (var i = 0x0; i < n; i++)
        nww[i] = arr['shift']()[a0_0x24f68b(0x3)]('\x20');
    nww = nww[a0_0x24f68b(0x4)](v => [
        v[0x0],
        v[0x1] - 0x0,
        v[0x2] - 0x0
    ]);
    var max = 0x0;
    var ans = [];
    var bomb = function (arrA, arrB, sum, g) {
        var _0x1c0e19 = a0_0x13ab;
        if (arrB[_0x1c0e19(0x5)] == 0x0) {
            if (max < g / sum) {
                ans = arrA;
                max = g / sum;
            }
            return;
        }
        arrB['forEach'](v => {
            var _0x15a30d = a0_0x13ab;
            if (sum <= nww[v][0x2]) {
                var a = arrA[_0x15a30d(0x6)](v);
                var b = arrB[_0x15a30d(0x7)]()[_0x15a30d(0x8)](n => v != n);
                var c = sum + nww[v][0x1];
                var d = g + nww[v][0x1] * (arrA[_0x15a30d(0x5)] + 0x1);
                bomb(a, b, c, d);
            }
        });
    };
    var bombArr = [];
    for (var i = 0x0; i < n; i++)
        bombArr[a0_0x24f68b(0x9)](i);
    bomb([], bombArr, 0x0, 0x0);
    console[a0_0x24f68b(0xa)](ans[a0_0x24f68b(0x4)](v => nww[v][0x0])['reverse']()[a0_0x24f68b(0xb)]('\x0a'));
}