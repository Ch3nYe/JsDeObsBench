var a0_0x132f8e = a0_0x352c;
(function (stringArrayFunction, comparisonValue) {
    var _0xd32dcd = a0_0x352c;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0xd32dcd(0x94)) / 0x1 + -parseInt(_0xd32dcd(0x9c)) / 0x2 * (-parseInt(_0xd32dcd(0x95)) / 0x3) + -parseInt(_0xd32dcd(0x8d)) / 0x4 + -parseInt(_0xd32dcd(0x9f)) / 0x5 * (-parseInt(_0xd32dcd(0x98)) / 0x6) + parseInt(_0xd32dcd(0x93)) / 0x7 * (-parseInt(_0xd32dcd(0x90)) / 0x8) + -parseInt(_0xd32dcd(0x9d)) / 0x9 * (-parseInt(_0xd32dcd(0xa1)) / 0xa) + -parseInt(_0xd32dcd(0x97)) / 0xb * (-parseInt(_0xd32dcd(0x9b)) / 0xc);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x2f32, 0xed909));
function a0_0x2f32() {
    var _0x208498 = [
        'split',
        'push',
        '1896NcCmWM',
        '2INEIhV',
        '9wWRXsx',
        'map',
        '115QgPECC',
        'stdin',
        '3050490WvmVKu',
        '4161964IvddoW',
        'stdout',
        'log',
        '8miyZgN',
        'line',
        'sort',
        '5518156OYmBaZ',
        '613065hztneF',
        '3705759cFalZW',
        'close',
        '12100EstKxD',
        '123834JTlIQX'
    ];
    a0_0x2f32 = function () {
        return _0x208498;
    };
    return a0_0x2f32();
}
function a0_0x352c(nvuxqi, key) {
    var stringArray = a0_0x2f32();
    a0_0x352c = function (index, key) {
        index = index - 0x8d;
        var value = stringArray[index];
        return value;
    };
    return a0_0x352c(nvuxqi, key);
}
var readline = require('readline');
var lines = [];
var result = 0x0;
var rl = readline['createInterface']({
    'input': process[a0_0x132f8e(0xa0)],
    'output': process[a0_0x132f8e(0x8e)]
});
rl['on'](a0_0x132f8e(0x91), function (x) {
    var _0x571ee4 = a0_0x132f8e;
    lines[_0x571ee4(0x9a)](x);
});
rl['on'](a0_0x132f8e(0x96), function () {
    var _0x3768af = a0_0x132f8e;
    var N = Number(lines[0x0][_0x3768af(0x99)]('\x20')[0x0]);
    var M = Number(lines[0x0]['split']('\x20')[0x1]);
    var X = lines[0x1][_0x3768af(0x99)]('\x20')[_0x3768af(0x9e)](value => Number(value));
    X[_0x3768af(0x92)]((a, b) => a - b);
    var sum = Array(M)['fill'](0x0);
    for (var i = 0x1; i < M; i++) {
        sum[i] = X[i] - X[i - 0x1];
    }
    sum['sort']((a, b) => b - a);
    for (var i = N - 0x1; i < M; i++) {
        result += sum[i];
    }
    console[_0x3768af(0x8f)](result);
});