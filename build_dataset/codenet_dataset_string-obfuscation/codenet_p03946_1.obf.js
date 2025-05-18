var a0_0x51c324 = a0_0x2e7f;
function a0_0x2e7f(YGfoMP, key) {
    var stringArray = a0_0x2847();
    a0_0x2e7f = function (index, key) {
        index = index - 0xdc;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2e7f(YGfoMP, key);
}
function a0_0x2847() {
    var _0x73a789 = [
        '233337qZttWL',
        '15uqvkFi',
        'readFileSync',
        'split',
        '2183964jhnbXe',
        'fill',
        'pow',
        '16lGYpnM',
        '142694MlMdDY',
        'max',
        '/dev/stdin',
        '656MuTzoj',
        '1573998eWiOat',
        'min',
        '12462261zhiMaB',
        'utf8',
        '2742010CMGGQG',
        '186939HEBjlR'
    ];
    a0_0x2847 = function () {
        return _0x73a789;
    };
    return a0_0x2847();
}
(function (stringArrayFunction, comparisonValue) {
    var _0x264be1 = a0_0x2e7f;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x264be1(0xe5)) / 0x1 + -parseInt(_0x264be1(0xe4)) / 0x2 * (parseInt(_0x264be1(0xdd)) / 0x3) + parseInt(_0x264be1(0xe1)) / 0x4 * (parseInt(_0x264be1(0xde)) / 0x5) + parseInt(_0x264be1(0xe9)) / 0x6 + parseInt(_0x264be1(0xeb)) / 0x7 + parseInt(_0x264be1(0xe8)) / 0x8 * (-parseInt(_0x264be1(0xdc)) / 0x9) + -parseInt(_0x264be1(0xed)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x2847, 0xe5128));
function Main(input) {
    var _0x14f867 = a0_0x2e7f;
    input = input[_0x14f867(0xe0)]('\x0a');
    tmp = input[0x0][_0x14f867(0xe0)]('\x20');
    var n = parseInt(tmp[0x0]);
    a = new Array(n)[_0x14f867(0xe2)](0x0);
    for (i = 0x0; i < n; i++) {
        a[i] = parseInt(input[0x1][_0x14f867(0xe0)]('\x20')[i]);
    }
    b = new Array(n)[_0x14f867(0xe2)](0x0);
    var min = Math[_0x14f867(0xe3)](0xa, 0x9);
    var max = -0x1;
    for (i = 0x0; i < n; i++) {
        min = Math[_0x14f867(0xea)](min, a[i]);
        if (max < a[i] - min) {
            ans = 0x1;
        }
        if (max == a[i] - min) {
            ans++;
        }
        max = Math[_0x14f867(0xe6)](max, a[i] - min);
    }
    console['log']('%s', ans);
}
Main(require('fs')[a0_0x51c324(0xdf)](a0_0x51c324(0xe7), a0_0x51c324(0xec)));