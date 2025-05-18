var a0_0x64cc96 = a0_0x4ecd;
(function (stringArrayFunction, comparisonValue) {
    var _0x23cd1c = a0_0x4ecd;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x23cd1c(0xa6)) / 0x1 * (parseInt(_0x23cd1c(0xab)) / 0x2) + -parseInt(_0x23cd1c(0x9e)) / 0x3 + -parseInt(_0x23cd1c(0xa2)) / 0x4 * (parseInt(_0x23cd1c(0xb1)) / 0x5) + parseInt(_0x23cd1c(0xb3)) / 0x6 + parseInt(_0x23cd1c(0xae)) / 0x7 * (-parseInt(_0x23cd1c(0xb2)) / 0x8) + -parseInt(_0x23cd1c(0xad)) / 0x9 * (parseInt(_0x23cd1c(0x9f)) / 0xa) + -parseInt(_0x23cd1c(0xb5)) / 0xb * (-parseInt(_0x23cd1c(0x9d)) / 0xc);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x4b5f, 0xe3d35));
var input = require('fs')[a0_0x64cc96(0xb4)](a0_0x64cc96(0xa1), a0_0x64cc96(0xa8));
var Arr = input[a0_0x64cc96(0xa5)]()[a0_0x64cc96(0xb0)]('\x0a');
var data = [];
function a0_0x4ecd(cWdMts, key) {
    var stringArray = a0_0x4b5f();
    a0_0x4ecd = function (index, key) {
        index = index - 0x9d;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4ecd(cWdMts, key);
}
var N;
function a0_0x4b5f() {
    var _0x120a63 = [
        '477140ItmnBf',
        'push',
        'reduce',
        'trim',
        '321XEsjJb',
        'length',
        'utf8',
        'map',
        'join',
        '10470eLcAyy',
        'slice',
        '18zhzsAp',
        '995183ZEqqma',
        '\x20\x20\x20\x20\x20',
        'split',
        '70DJnBaa',
        '24mmXYBc',
        '2130204BPKBAr',
        'readFileSync',
        '30226559lDVcRP',
        '12YQeoWt',
        '2558082vCBBLt',
        '4504870NrTffV',
        'log',
        '/dev/stdin'
    ];
    a0_0x4b5f = function () {
        return _0x120a63;
    };
    return a0_0x4b5f();
}
for (var i = 0x0; i < Arr[a0_0x64cc96(0xa7)]; i++) {
    var arr = Arr[i][a0_0x64cc96(0xb0)]('\x20')[a0_0x64cc96(0xa9)](Number);
    if (arr[a0_0x64cc96(0xa7)] == 0x1) {
        if (i == 0x0) {
            N = arr[0x0];
            continue;
        }
        var DATA = [];
        for (var j = 0x0; j < N + 0x1; j++) {
            DATA[a0_0x64cc96(0xa3)](0x0);
        }
        for (var k = 0x0; k < N; k++) {
            var v = data[k];
            for (var l = 0x0; l < N + 0x1; l++) {
                DATA[l] += v[l];
            }
            v = v[a0_0x64cc96(0xa9)](function (val) {
                var _0x1f77b6 = a0_0x64cc96;
                return (_0x1f77b6(0xaf) + val)[_0x1f77b6(0xac)](-0x5);
            });
            console[a0_0x64cc96(0xa0)](v[a0_0x64cc96(0xaa)](''));
        }
        DATA = DATA[a0_0x64cc96(0xa9)](function (val) {
            var _0x541f45 = a0_0x64cc96;
            return (_0x541f45(0xaf) + val)[_0x541f45(0xac)](-0x5);
        });
        console[a0_0x64cc96(0xa0)](DATA[a0_0x64cc96(0xaa)](''));
        if (arr[0x0] == 0x0)
            break;
        data = [];
        N = arr[0x0];
    } else {
        var sum = arr[a0_0x64cc96(0xa4)](function (a, b) {
            return a + b;
        });
        arr['push'](sum);
        data[a0_0x64cc96(0xa3)](arr);
    }
}