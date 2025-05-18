var a0_0x4dd8a4 = a0_0x4491;
(function (stringArrayFunction, comparisonValue) {
    var _0x4b143d = a0_0x4491;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x4b143d(0x168)) / 0x1 * (-parseInt(_0x4b143d(0x166)) / 0x2) + -parseInt(_0x4b143d(0x176)) / 0x3 + -parseInt(_0x4b143d(0x171)) / 0x4 + parseInt(_0x4b143d(0x172)) / 0x5 + parseInt(_0x4b143d(0x170)) / 0x6 + -parseInt(_0x4b143d(0x167)) / 0x7 * (-parseInt(_0x4b143d(0x16a)) / 0x8) + -parseInt(_0x4b143d(0x169)) / 0x9 * (-parseInt(_0x4b143d(0x16d)) / 0xa);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x4381, 0xcf399));
function prime(max) {
    var _0x4bf456 = a0_0x4491;
    var arr = [];
    for (var i = 0x0; i <= max; i++)
        arr[i] = i;
    arr[0x0] = ![];
    arr[0x1] = ![];
    var sqrt = Math['floor'](Math[_0x4bf456(0x175)](max));
    for (var i = 0x2; i <= sqrt; i++) {
        if (arr[i] == ![])
            continue;
        for (var j = i + i; j <= max; j += i) {
            arr[j] = ![];
        }
    }
    var result = [];
    for (var i = 0x0; i <= max; i++) {
        if (arr[i] !== ![])
            result[_0x4bf456(0x177)](arr[i]);
    }
    return result;
}
function a0_0x4381() {
    var _0x19edc0 = [
        'length',
        '/dev/stdin',
        '487248sMWFcH',
        '6564768AmTyVa',
        '3313145jjmfwo',
        'trim',
        'readFileSync',
        'sqrt',
        '2645187GfMHWf',
        'push',
        'shift',
        'split',
        '17788IkLeHu',
        '119xNVJGL',
        '39EtttuA',
        '9XxrlWG',
        '534840WlDrgH',
        'log',
        'utf8',
        '11444760PSPeml'
    ];
    a0_0x4381 = function () {
        return _0x19edc0;
    };
    return a0_0x4381();
}
var p = prime(0xc350);
function a0_0x4491(tSiNob, key) {
    var stringArray = a0_0x4381();
    a0_0x4491 = function (index, key) {
        index = index - 0x165;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4491(tSiNob, key);
}
var input = require('fs')[a0_0x4dd8a4(0x174)](a0_0x4dd8a4(0x16f), a0_0x4dd8a4(0x16c));
var Arr = input[a0_0x4dd8a4(0x173)]()[a0_0x4dd8a4(0x165)]('\x0a');
while (!![]) {
    var n = Arr[a0_0x4dd8a4(0x178)]() - 0x0;
    if (n == 0x0)
        break;
    var cnt = 0x0;
    var k = p[a0_0x4dd8a4(0x16e)] - 0x1;
    for (var i = 0x0; i < p['length']; i++) {
        while (p[i] + p[k] > n)
            k--;
        if (k < i)
            break;
        if (p[i] + p[k] == n)
            cnt++;
    }
    console[a0_0x4dd8a4(0x16b)](cnt);
}