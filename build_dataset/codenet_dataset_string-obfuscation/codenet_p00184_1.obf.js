var a0_0x28c22f = a0_0x10e9;
function a0_0x10e9(RHlWhp, key) {
    var stringArray = a0_0x1239();
    a0_0x10e9 = function (index, key) {
        index = index - 0x1ba;
        var value = stringArray[index];
        return value;
    };
    return a0_0x10e9(RHlWhp, key);
}
(function (stringArrayFunction, comparisonValue) {
    var _0x43e2e3 = a0_0x10e9;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x43e2e3(0x1c9)) / 0x1 + parseInt(_0x43e2e3(0x1c1)) / 0x2 * (parseInt(_0x43e2e3(0x1ca)) / 0x3) + parseInt(_0x43e2e3(0x1c6)) / 0x4 * (-parseInt(_0x43e2e3(0x1c3)) / 0x5) + -parseInt(_0x43e2e3(0x1bc)) / 0x6 * (-parseInt(_0x43e2e3(0x1bf)) / 0x7) + parseInt(_0x43e2e3(0x1c7)) / 0x8 + -parseInt(_0x43e2e3(0x1bb)) / 0x9 * (-parseInt(_0x43e2e3(0x1ba)) / 0xa) + -parseInt(_0x43e2e3(0x1cb)) / 0xb * (parseInt(_0x43e2e3(0x1c8)) / 0xc);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x1239, 0x2f56b));
var input = require('fs')[a0_0x28c22f(0x1cd)](a0_0x28c22f(0x1c4), a0_0x28c22f(0x1be));
var Arr = input[a0_0x28c22f(0x1c0)]()[a0_0x28c22f(0x1c5)]('\x0a')[a0_0x28c22f(0x1cc)](Number);
var n = 0x0;
function a0_0x1239() {
    var _0x3969c8 = [
        '9981iPoefo',
        '13128QaEwFJ',
        'log',
        'utf8',
        '406QjfbQV',
        'trim',
        '31052TbcMAl',
        'length',
        '1293815BPxILU',
        '/dev/stdin',
        'split',
        '4vJitCw',
        '2641888VqSAqk',
        '1935852NWDZPC',
        '61630TYflCY',
        '39fahtAu',
        '11lXpZLp',
        'map',
        'readFileSync',
        '150RhICIz'
    ];
    a0_0x1239 = function () {
        return _0x3969c8;
    };
    return a0_0x1239();
}
var arr = [
    0x0,
    0x0,
    0x0,
    0x0,
    0x0,
    0x0,
    0x0
];
for (var i = 0x0; i < Arr[a0_0x28c22f(0x1c2)]; i++) {
    if (n == 0x0) {
        if (i != 0x0)
            arr['forEach'](function (v) {
                var _0x279145 = a0_0x28c22f;
                console[_0x279145(0x1bd)](v);
            });
        if (Arr[i] == 0x0)
            break;
        n = Arr[i];
        arr = [
            0x0,
            0x0,
            0x0,
            0x0,
            0x0,
            0x0,
            0x0
        ];
    } else {
        n--;
        if (Arr[i] >= 0x3c)
            arr[0x6]++;
        else if (Arr[i] >= 0x32)
            arr[0x5]++;
        else if (Arr[i] >= 0x28)
            arr[0x4]++;
        else if (Arr[i] >= 0x1e)
            arr[0x3]++;
        else if (Arr[i] >= 0x14)
            arr[0x2]++;
        else if (Arr[i] >= 0xa)
            arr[0x1]++;
        else
            arr[0x0]++;
    }
}