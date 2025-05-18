function a0_0x295c() {
    var _0x383726 = [
        '68280VjbjLn',
        '145zxlMIh',
        'trim',
        '9ePczRB',
        '86053oqdjVE',
        '4843760ULnmdW',
        'split',
        'readFileSync',
        '261672VOhcww',
        '19xJgHrN',
        '18HQgnVY',
        'map',
        '/dev/stdin',
        '6311270MUaOqx',
        'utf8',
        'forEach',
        'log',
        '17626LJttUD',
        '65898mXKYgQ',
        '1788bGQoNf'
    ];
    a0_0x295c = function () {
        return _0x383726;
    };
    return a0_0x295c();
}
var a0_0x30130d = a0_0x2c96;
function a0_0x2c96(SVsXBN, key) {
    var stringArray = a0_0x295c();
    a0_0x2c96 = function (index, key) {
        index = index - 0xe1;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2c96(SVsXBN, key);
}
(function (stringArrayFunction, comparisonValue) {
    var _0x1ae7d1 = a0_0x2c96;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x1ae7d1(0xf1)) / 0x1 * (parseInt(_0x1ae7d1(0xe5)) / 0x2) + -parseInt(_0x1ae7d1(0xf0)) / 0x3 + parseInt(_0x1ae7d1(0xe8)) / 0x4 * (parseInt(_0x1ae7d1(0xe9)) / 0x5) + -parseInt(_0x1ae7d1(0xf2)) / 0x6 * (-parseInt(_0x1ae7d1(0xe6)) / 0x7) + parseInt(_0x1ae7d1(0xed)) / 0x8 + -parseInt(_0x1ae7d1(0xeb)) / 0x9 * (-parseInt(_0x1ae7d1(0xe1)) / 0xa) + parseInt(_0x1ae7d1(0xec)) / 0xb * (-parseInt(_0x1ae7d1(0xe7)) / 0xc);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x295c, 0x52e73));
var input = require('fs')[a0_0x30130d(0xef)](a0_0x30130d(0xf4), a0_0x30130d(0xe2));
var Arr = input[a0_0x30130d(0xea)]()[a0_0x30130d(0xee)]('\x0a');
Arr[a0_0x30130d(0xe3)](function (v) {
    var _0x43d176 = a0_0x30130d;
    var arr = v['split']('\x20')[_0x43d176(0xf3)](Number);
    var m = Math['max'](arr[0x0], arr[0x1]);
    var n = Math['min'](arr[0x0], arr[0x1]);
    while (n != 0x0) {
        var N = n;
        n = m % n;
        m = N;
    }
    console[_0x43d176(0xe4)](m);
});