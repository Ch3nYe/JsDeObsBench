var a0_0x317628 = a0_0x51e2;
function a0_0x51e2(YivjfS, key) {
    var stringArray = a0_0x3ae1();
    a0_0x51e2 = function (index, key) {
        index = index - 0xff;
        var value = stringArray[index];
        return value;
    };
    return a0_0x51e2(YivjfS, key);
}
(function (stringArrayFunction, comparisonValue) {
    var _0x572d86 = a0_0x51e2;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x572d86(0x105)) / 0x1 + parseInt(_0x572d86(0x10e)) / 0x2 + -parseInt(_0x572d86(0x10a)) / 0x3 + parseInt(_0x572d86(0x107)) / 0x4 * (parseInt(_0x572d86(0x103)) / 0x5) + parseInt(_0x572d86(0xff)) / 0x6 + parseInt(_0x572d86(0x106)) / 0x7 + -parseInt(_0x572d86(0x101)) / 0x8 * (parseInt(_0x572d86(0x10d)) / 0x9);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x3ae1, 0xd2c0b));
var input = require('fs')[a0_0x317628(0x100)](a0_0x317628(0x10c), a0_0x317628(0x108));
var Arr = input['replace'](/\n$/, '')[a0_0x317628(0x109)]('\x0a');
function a0_0x3ae1() {
    var _0x471cc0 = [
        'map',
        '/dev/stdin',
        '9YAXlfm',
        '2926064gLjYpd',
        '2080182VnYXYo',
        'readFileSync',
        '10973888mPciqT',
        'log',
        '77200oBmmyN',
        'push',
        '391065oPgEwV',
        '4351438GiaiIb',
        '200ETrfou',
        'utf8',
        'split',
        '1731957KFbQdJ'
    ];
    a0_0x3ae1 = function () {
        return _0x471cc0;
    };
    return a0_0x3ae1();
}
var n = Arr['shift']() - 0x0;
for (var i = 0x0; i < n; i++) {
    var arr = Arr[i][a0_0x317628(0x109)]('\x20')[a0_0x317628(0x10b)](Number);
    var s = arr[0x0];
    var g = arr[0x1];
    var ans = [s];
    var plus = 0x1;
    if (s < g) {
        do {
            s++;
            ans[a0_0x317628(0x104)](s);
        } while (s != g);
    } else if (s > g && s <= 0x5) {
        do {
            s--;
            ans[a0_0x317628(0x104)](s);
        } while (s != g);
    } else if (s > g && s >= 0x6 && g >= 0x6) {
        do {
            s++;
            if (s == 0xa) {
                s = 0x5;
            }
            ans['push'](s);
        } while (s != g);
    } else if (s > g && s >= 0x6 && g <= 0x5) {
        do {
            s += plus;
            if (s == 0xa) {
                s = 0x5;
                plus = -0x1;
            }
            ;
            ans['push'](s);
        } while (s != g);
    }
    console[a0_0x317628(0x102)](ans['join']('\x20'));
}