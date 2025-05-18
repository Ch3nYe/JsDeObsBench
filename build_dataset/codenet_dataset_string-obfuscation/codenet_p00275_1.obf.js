var a0_0x12eba7 = a0_0x1219;
function a0_0x35db() {
    var _0x452858 = [
        '423binlrU',
        '30FfTiYz',
        '1647729rJSMqo',
        '1722CsjnxY',
        'trim',
        '117736felbYc',
        'join',
        'length',
        'split',
        '330362PAubJb',
        '441784hfjkki',
        'shift',
        'sort',
        '440328wKDohy',
        'log',
        'utf8',
        '42qAqpGa',
        'readFileSync',
        '80990ltwNhH'
    ];
    a0_0x35db = function () {
        return _0x452858;
    };
    return a0_0x35db();
}
(function (stringArrayFunction, comparisonValue) {
    var _0xe2f141 = a0_0x1219;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0xe2f141(0xe9)) / 0x1 + -parseInt(_0xe2f141(0xe3)) / 0x2 * (-parseInt(_0xe2f141(0xe0)) / 0x3) + -parseInt(_0xe2f141(0xe5)) / 0x4 + -parseInt(_0xe2f141(0xdf)) / 0x5 * (parseInt(_0xe2f141(0xf0)) / 0x6) + -parseInt(_0xe2f141(0xed)) / 0x7 + parseInt(_0xe2f141(0xea)) / 0x8 + parseInt(_0xe2f141(0xe2)) / 0x9 * (parseInt(_0xe2f141(0xe1)) / 0xa);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x35db, 0x2e555));
function a0_0x1219(LuWzAt, key) {
    var stringArray = a0_0x35db();
    a0_0x1219 = function (index, key) {
        index = index - 0xdf;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1219(LuWzAt, key);
}
var input = require('fs')[a0_0x12eba7(0xf1)]('/dev/stdin', a0_0x12eba7(0xef));
var Arr = input[a0_0x12eba7(0xe4)]()[a0_0x12eba7(0xe8)]('\x0a');
while (!![]) {
    var N = Arr[a0_0x12eba7(0xeb)]() - 0x0;
    if (N == 0x0)
        break;
    var n = [];
    var p = 0x0;
    for (var i = 0x0; i < N; i++)
        n[i] = 0x0;
    var str = Arr[a0_0x12eba7(0xeb)]();
    for (var i = 0x0; i < str[a0_0x12eba7(0xe7)]; i++) {
        var v = str[i];
        var j = i % N;
        if (v == 'M')
            n[j]++;
        if (v == 'S') {
            p += n[j] + 0x1;
            n[j] = 0x0;
        }
        if (v == 'L') {
            n[j] += p + 0x1;
            p = 0x0;
        }
    }
    n[a0_0x12eba7(0xec)](function (a, b) {
        return a - b;
    });
    console[a0_0x12eba7(0xee)](n[a0_0x12eba7(0xe6)]('\x20') + '\x20' + p);
}