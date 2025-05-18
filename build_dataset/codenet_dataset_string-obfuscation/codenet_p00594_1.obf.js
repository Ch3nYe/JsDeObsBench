var a0_0x2cf652 = a0_0x31d4;
(function (stringArrayFunction, comparisonValue) {
    var _0x2ca716 = a0_0x31d4;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x2ca716(0xa9)) / 0x1 * (-parseInt(_0x2ca716(0xad)) / 0x2) + -parseInt(_0x2ca716(0xb0)) / 0x3 * (parseInt(_0x2ca716(0xac)) / 0x4) + -parseInt(_0x2ca716(0xa8)) / 0x5 + parseInt(_0x2ca716(0xb5)) / 0x6 * (parseInt(_0x2ca716(0xb2)) / 0x7) + parseInt(_0x2ca716(0xa7)) / 0x8 * (parseInt(_0x2ca716(0xb3)) / 0x9) + parseInt(_0x2ca716(0xb7)) / 0xa + parseInt(_0x2ca716(0xb1)) / 0xb;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x41bf, 0xe1a64));
var input = require('fs')[a0_0x2cf652(0xab)](a0_0x2cf652(0xb4), a0_0x2cf652(0xb6));
var arr = input[a0_0x2cf652(0xae)]()['split']('\x0a');
function a0_0x41bf() {
    var _0x52f57b = [
        '/dev/stdin',
        '5292BGGWbV',
        'utf8',
        '16681540CONZGU',
        'split',
        'NO\x20COLOR',
        '8XAYrvx',
        '1287275TzAyzZ',
        '1iDxDfT',
        'forEach',
        'readFileSync',
        '816suUmeK',
        '3135926SIsfvr',
        'trim',
        'shift',
        '15852yFszoF',
        '4000150JIEfaM',
        '42FEHCsM',
        '16114662WuXKKv'
    ];
    a0_0x41bf = function () {
        return _0x52f57b;
    };
    return a0_0x41bf();
}
function a0_0x31d4(jMynOe, key) {
    var stringArray = a0_0x41bf();
    a0_0x31d4 = function (index, key) {
        index = index - 0xa5;
        var value = stringArray[index];
        return value;
    };
    return a0_0x31d4(jMynOe, key);
}
while (!![]) {
    var n = arr[a0_0x2cf652(0xaf)]() - 0x0;
    if (n === 0x0)
        break;
    var ary = arr[a0_0x2cf652(0xaf)]()[a0_0x2cf652(0xa5)]('\x20');
    var obj = {};
    ary['forEach'](function (v) {
        obj[v] = 0x0;
    });
    ary[a0_0x2cf652(0xaa)](function (v) {
        obj[v]++;
    });
    var ans = a0_0x2cf652(0xa6);
    var half = n / 0x2;
    for (var k in obj) {
        if (obj[k] > half) {
            ans = k;
            break;
        }
    }
    console['log'](ans);
}