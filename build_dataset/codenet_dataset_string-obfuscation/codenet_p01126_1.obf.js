var a0_0xe7520 = a0_0x2795;
(function (stringArrayFunction, comparisonValue) {
    var _0x3f87c9 = a0_0x2795;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x3f87c9(0x109)) / 0x1 + -parseInt(_0x3f87c9(0x10a)) / 0x2 + parseInt(_0x3f87c9(0x113)) / 0x3 + -parseInt(_0x3f87c9(0x11b)) / 0x4 + -parseInt(_0x3f87c9(0x10e)) / 0x5 * (parseInt(_0x3f87c9(0x115)) / 0x6) + -parseInt(_0x3f87c9(0x112)) / 0x7 * (parseInt(_0x3f87c9(0x110)) / 0x8) + -parseInt(_0x3f87c9(0x118)) / 0x9 * (-parseInt(_0x3f87c9(0x117)) / 0xa);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x1098, 0xe3fdc));
function a0_0x2795(AUrNJL, key) {
    var stringArray = a0_0x1098();
    a0_0x2795 = function (index, key) {
        index = index - 0x109;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2795(AUrNJL, key);
}
var input = require('fs')['readFileSync']('/dev/stdin', a0_0xe7520(0x111));
var Arr = input[a0_0xe7520(0x10d)]()[a0_0xe7520(0x116)]('\x0a');
function a0_0x1098() {
    var _0x1da5c8 = [
        'utf8',
        '7fdokQw',
        '4429395Uvlysp',
        'log',
        '1461534oqFHXx',
        'split',
        '10eyBEpI',
        '35160633tDCAus',
        'sort',
        'map',
        '4511428CFWbhB',
        '221469kZoDlQ',
        '3360694GsEAzu',
        '0\x200\x200',
        'shift',
        'trim',
        '15ZRZMJe',
        'push',
        '9054784ARvNqU'
    ];
    a0_0x1098 = function () {
        return _0x1da5c8;
    };
    return a0_0x1098();
}
while (!![]) {
    var A = Arr[a0_0xe7520(0x10c)]();
    if (A == a0_0xe7520(0x10b))
        break;
    var arr = A[a0_0xe7520(0x116)]('\x20')[a0_0xe7520(0x11a)](Number);
    var m = arr[0x1];
    var start = arr[0x2];
    var hpq = [];
    for (var i = 0x0; i < m; i++)
        hpq[a0_0xe7520(0x10f)](Arr[a0_0xe7520(0x10c)]());
    hpq[a0_0xe7520(0x119)](function (a, b) {
        var _0x59518f = a0_0xe7520;
        a = a['split']('\x20')[0x0] - 0x0;
        b = b[_0x59518f(0x116)]('\x20')[0x0] - 0x0;
        if (a >= b)
            return -0x1;
        else
            return 0x1;
    });
    var H = 0x3e9;
    for (var i = 0x0; i < hpq['length']; i++) {
        var HPQ = hpq[i][a0_0xe7520(0x116)]('\x20')[a0_0xe7520(0x11a)](Number);
        var h = HPQ[0x0];
        var p = HPQ[0x1];
        var q = HPQ[0x2];
        if (H == h)
            continue;
        if (start == p || start == q) {
            H = h;
            start = start == p ? q : p;
        }
    }
    console[a0_0xe7520(0x114)](start);
}