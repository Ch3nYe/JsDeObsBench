var a0_0x51fcca = a0_0x439e;
(function (stringArrayFunction, comparisonValue) {
    var _0x2ed37e = a0_0x439e;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x2ed37e(0x147)) / 0x1 * (parseInt(_0x2ed37e(0x13b)) / 0x2) + -parseInt(_0x2ed37e(0x13a)) / 0x3 * (-parseInt(_0x2ed37e(0x14e)) / 0x4) + parseInt(_0x2ed37e(0x143)) / 0x5 * (parseInt(_0x2ed37e(0x14c)) / 0x6) + parseInt(_0x2ed37e(0x148)) / 0x7 + -parseInt(_0x2ed37e(0x142)) / 0x8 * (-parseInt(_0x2ed37e(0x14d)) / 0x9) + parseInt(_0x2ed37e(0x145)) / 0xa + -parseInt(_0x2ed37e(0x14b)) / 0xb;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x4e66, 0xbd1e5));
var input = require('fs')['readFileSync'](a0_0x51fcca(0x141), a0_0x51fcca(0x14a));
function a0_0x4e66() {
    var _0x7d39f1 = [
        'filter',
        'split',
        '/dev/stdin',
        '5387296tJEYpj',
        '5YJNsSN',
        'log',
        '14015170asSktQ',
        'shift',
        '20266imWkJa',
        '8643124siaued',
        'length',
        'utf8',
        '54596916BbiWqa',
        '2266674JzhRYf',
        '18tuIOuC',
        '52VtvMDl',
        '154113CUhAvR',
        '70NUCqjN',
        'push',
        'slice',
        'map'
    ];
    a0_0x4e66 = function () {
        return _0x7d39f1;
    };
    return a0_0x4e66();
}
var arr = input['trim']()[a0_0x51fcca(0x140)]('\x0a');
function a0_0x439e(alBBiF, key) {
    var stringArray = a0_0x4e66();
    a0_0x439e = function (index, key) {
        index = index - 0x13a;
        var value = stringArray[index];
        return value;
    };
    return a0_0x439e(alBBiF, key);
}
while (!![]) {
    var n = arr['shift']() - 0x0;
    if (n == 0x0)
        break;
    var nww = [];
    for (var i = 0x0; i < n; i++)
        nww[i] = arr[a0_0x51fcca(0x146)]()[a0_0x51fcca(0x140)]('\x20');
    nww = nww[a0_0x51fcca(0x13e)](v => [
        v[0x0],
        v[0x1] - 0x0,
        v[0x2] - 0x0
    ]);
    var max = 0x0;
    var ans = [];
    var bomb = function (arrA, arrB, sum, g) {
        var _0x286e82 = a0_0x51fcca;
        if (arrB[_0x286e82(0x149)] == 0x0) {
            if (max < g / sum) {
                ans = arrA;
                max = g / sum;
            }
            return;
        }
        arrB['forEach'](v => {
            var _0x110f87 = _0x286e82;
            if (sum <= nww[v][0x2]) {
                var a = arrA['concat'](v);
                var b = arrB[_0x110f87(0x13d)]()[_0x110f87(0x13f)](n => v != n);
                var c = sum + nww[v][0x1];
                var d = g + nww[v][0x1] * (arrA[_0x110f87(0x149)] + 0x1);
                bomb(a, b, c, d);
            }
        });
    };
    var bombArr = [];
    for (var i = 0x0; i < n; i++)
        bombArr[a0_0x51fcca(0x13c)](i);
    bomb([], bombArr, 0x0, 0x0);
    console[a0_0x51fcca(0x144)](ans[a0_0x51fcca(0x13e)](v => nww[v][0x0])['reverse']()['join']('\x0a'));
}