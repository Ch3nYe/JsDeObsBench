var a0_0xa754c4 = a0_0x3213;
(function (stringArrayFunction, comparisonValue) {
    var _0x39787c = a0_0x3213;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x39787c(0x1f9)) / 0x1 * (-parseInt(_0x39787c(0x1f7)) / 0x2) + -parseInt(_0x39787c(0x1fc)) / 0x3 * (-parseInt(_0x39787c(0x201)) / 0x4) + -parseInt(_0x39787c(0x1ee)) / 0x5 * (parseInt(_0x39787c(0x1f5)) / 0x6) + -parseInt(_0x39787c(0x1ff)) / 0x7 * (-parseInt(_0x39787c(0x1ed)) / 0x8) + parseInt(_0x39787c(0x1eb)) / 0x9 * (-parseInt(_0x39787c(0x1fa)) / 0xa) + parseInt(_0x39787c(0x1f4)) / 0xb * (parseInt(_0x39787c(0x1fe)) / 0xc) + parseInt(_0x39787c(0x200)) / 0xd;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x4ccf, 0x6006c));
function a0_0x3213(ZqPrdP, key) {
    var stringArray = a0_0x4ccf();
    a0_0x3213 = function (index, key) {
        index = index - 0x1eb;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3213(ZqPrdP, key);
}
var input = require('fs')[a0_0xa754c4(0x1f2)](a0_0xa754c4(0x1fd), a0_0xa754c4(0x1f3));
var arr = input[a0_0xa754c4(0x1f8)]()['split']('\x0a');
var [n, d] = arr[a0_0xa754c4(0x1f0)]()['split']('\x20')['map'](Number);
var p = arr[a0_0xa754c4(0x1f0)]()[a0_0xa754c4(0x1ef)]('\x20')[a0_0xa754c4(0x1f6)](Number);
var sum = 0x0;
function a0_0x4ccf() {
    var _0x4de65e = [
        '237GwRYFm',
        '/dev/stdin',
        '24hKSvbp',
        '510307NVnVBA',
        '5689853JOcDUF',
        '22492RaXrfQ',
        '9oGpuKF',
        'max',
        '8CCIUXf',
        '65oodJQd',
        'split',
        'shift',
        'forEach',
        'readFileSync',
        'utf8',
        '2501653HDtCNk',
        '341538IatDFl',
        'map',
        '49076GqBoaz',
        'trim',
        '3tVdQik',
        '2027080EegJTG',
        'log'
    ];
    a0_0x4ccf = function () {
        return _0x4de65e;
    };
    return a0_0x4ccf();
}
p[a0_0xa754c4(0x1f1)](v => {
    var _0x1e5c86 = a0_0xa754c4;
    sum += Math[_0x1e5c86(0x1ec)](0x0, v - d);
});
console[a0_0xa754c4(0x1fb)](sum == 0x0 ? 'kusoge' : sum);