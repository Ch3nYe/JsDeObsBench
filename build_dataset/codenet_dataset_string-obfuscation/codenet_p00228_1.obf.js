function a0_0x365a(HYJMDe, key) {
    var stringArray = a0_0x196f();
    a0_0x365a = function (index, key) {
        index = index - 0x1a2;
        var value = stringArray[index];
        return value;
    };
    return a0_0x365a(HYJMDe, key);
}
var a0_0x22e7a4 = a0_0x365a;
(function (stringArrayFunction, comparisonValue) {
    var _0x19a831 = a0_0x365a;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x19a831(0x1b0)) / 0x1 + parseInt(_0x19a831(0x1af)) / 0x2 * (parseInt(_0x19a831(0x1b3)) / 0x3) + -parseInt(_0x19a831(0x1a6)) / 0x4 + -parseInt(_0x19a831(0x1b5)) / 0x5 + parseInt(_0x19a831(0x1a8)) / 0x6 + -parseInt(_0x19a831(0x1a3)) / 0x7 * (parseInt(_0x19a831(0x1b4)) / 0x8) + -parseInt(_0x19a831(0x1b2)) / 0x9 * (-parseInt(_0x19a831(0x1a4)) / 0xa);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x196f, 0x45f1e));
var input = require('fs')['readFileSync'](a0_0x22e7a4(0x1ac), a0_0x22e7a4(0x1a2));
var Arr = input[a0_0x22e7a4(0x1ad)]()[a0_0x22e7a4(0x1b1)]('\x0a')[a0_0x22e7a4(0x1b6)](Number);
var SEG = [
    [
        0x1,
        0x1,
        0x1,
        0x1,
        0x1,
        0x1,
        0x0
    ]['reverse'](),
    [
        0x0,
        0x1,
        0x1,
        0x0,
        0x0,
        0x0,
        0x0
    ][a0_0x22e7a4(0x1a7)](),
    [
        0x1,
        0x1,
        0x0,
        0x1,
        0x1,
        0x0,
        0x1
    ][a0_0x22e7a4(0x1a7)](),
    [
        0x1,
        0x1,
        0x1,
        0x1,
        0x0,
        0x0,
        0x1
    ][a0_0x22e7a4(0x1a7)](),
    [
        0x0,
        0x1,
        0x1,
        0x0,
        0x0,
        0x1,
        0x1
    ][a0_0x22e7a4(0x1a7)](),
    [
        0x1,
        0x0,
        0x1,
        0x1,
        0x0,
        0x1,
        0x1
    ]['reverse'](),
    [
        0x1,
        0x0,
        0x1,
        0x1,
        0x1,
        0x1,
        0x1
    ]['reverse'](),
    [
        0x1,
        0x1,
        0x1,
        0x0,
        0x0,
        0x1,
        0x0
    ]['reverse'](),
    [
        0x1,
        0x1,
        0x1,
        0x1,
        0x1,
        0x1,
        0x1
    ][a0_0x22e7a4(0x1a7)](),
    [
        0x1,
        0x1,
        0x1,
        0x1,
        0x0,
        0x1,
        0x1
    ][a0_0x22e7a4(0x1a7)]()
];
var n = Arr[0x0];
var seg = [];
function a0_0x196f() {
    var _0x3a8414 = [
        'trim',
        'slice',
        '136924MOYKpl',
        '540313YIODyi',
        'split',
        '45YAGVrM',
        '3POAIlk',
        '8TDSCLz',
        '130930UFjxPj',
        'map',
        'utf8',
        '1431920MfpAmb',
        '1502410UDurgl',
        'push',
        '984372FPYEGf',
        'reverse',
        '2903874anACAa',
        'length',
        'forEach',
        'log',
        '/dev/stdin'
    ];
    a0_0x196f = function () {
        return _0x3a8414;
    };
    return a0_0x196f();
}
for (var i = 0x1; i < Arr[a0_0x22e7a4(0x1a9)]; i++) {
    if (n == 0x0) {
        if (i == 0x0)
            continue;
        var arr = [
            0x0,
            0x0,
            0x0,
            0x0,
            0x0,
            0x0,
            0x0
        ];
        seg[a0_0x22e7a4(0x1aa)](function (v) {
            var _0x26805a = a0_0x22e7a4;
            var V = SEG[v];
            var str = '';
            for (var i = 0x0; i < 0x7; i++) {
                str += V[i] == arr[i] ? '0' : '1';
            }
            console[_0x26805a(0x1ab)](str);
            arr = V[_0x26805a(0x1ae)]();
        });
        if (Arr[i] == -0x1)
            break;
        seg = [];
        n = Arr[i];
    } else {
        n--;
        seg[a0_0x22e7a4(0x1a5)](Arr[i]);
    }
}