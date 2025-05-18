var a0_0x1958ba = a0_0x190d;
function a0_0x190d(oPojQE, key) {
    var stringArray = a0_0x1f7b();
    a0_0x190d = function (index, key) {
        index = index - 0xd9;
        var value = stringArray[index];
        return value;
    };
    return a0_0x190d(oPojQE, key);
}
function a0_0x1f7b() {
    var _0x237107 = [
        '/dev/stdin',
        '41878408bCupNj',
        'hasOwnProperty',
        '9256hTujqJ',
        '114hcINAq',
        'shift',
        '446271QkVquw',
        'log',
        '2025976nYfosJ',
        '46RRRsrS',
        '82593RSjPFB',
        '6997680ECfVcM',
        '10ZKGhsa',
        '4905JfyyaQ',
        'push',
        'readFileSync',
        'split',
        '129696WprefY',
        'utf8'
    ];
    a0_0x1f7b = function () {
        return _0x237107;
    };
    return a0_0x1f7b();
}
(function (stringArrayFunction, comparisonValue) {
    var _0x2ae411 = a0_0x190d;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x2ae411(0xde)) / 0x1 + parseInt(_0x2ae411(0xdd)) / 0x2 * (-parseInt(_0x2ae411(0xe5)) / 0x3) + parseInt(_0x2ae411(0xdc)) / 0x4 * (-parseInt(_0x2ae411(0xe0)) / 0x5) + -parseInt(_0x2ae411(0xeb)) / 0x6 * (parseInt(_0x2ae411(0xda)) / 0x7) + -parseInt(_0x2ae411(0xea)) / 0x8 * (parseInt(_0x2ae411(0xe1)) / 0x9) + parseInt(_0x2ae411(0xdf)) / 0xa + parseInt(_0x2ae411(0xe8)) / 0xb;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x1f7b, 0xb4bc5));
var input = require('fs')[a0_0x1958ba(0xe3)](a0_0x1958ba(0xe7), a0_0x1958ba(0xe6));
var Arr = input['trim']()[a0_0x1958ba(0xe4)]('\x0a');
while (!![]) {
    var N = Arr['shift']() - 0x0;
    if (N == 0x0)
        break;
    var plus = {};
    var minus = {};
    var pm = [];
    for (var i = 0x0; i < N; i++) {
        var arr = Arr[a0_0x1958ba(0xd9)]()[a0_0x1958ba(0xe4)]('\x20')['map'](Number);
        var m = arr[0x0];
        var a = arr[0x1];
        var b = arr[0x2] - 0.001 * N;
        plus[a] = m;
        minus[b] = m;
        pm[a0_0x1958ba(0xe2)](a);
        pm['push'](b);
    }
    pm['sort'](function (a, b) {
        return a - b;
    });
    var flag = 'OK';
    var sum = 0x0;
    for (var i = 0x0; i < pm['length']; i++) {
        var v = pm[i];
        if (plus['hasOwnProperty'](v))
            sum += plus[v];
        if (minus[a0_0x1958ba(0xe9)](v))
            sum -= minus[v];
        if (sum > 0x96) {
            flag = 'NG';
            break;
        }
    }
    console[a0_0x1958ba(0xdb)](flag);
}