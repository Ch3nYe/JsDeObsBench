function a0_0x3fb0(bHEWEs, key) {
    var stringArray = a0_0x5cf8();
    a0_0x3fb0 = function (index, key) {
        index = index - 0xdf;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3fb0(bHEWEs, key);
}
var a0_0x29bc6b = a0_0x3fb0;
(function (stringArrayFunction, comparisonValue) {
    var _0x1f5d12 = a0_0x3fb0;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x1f5d12(0xdf)) / 0x1 + parseInt(_0x1f5d12(0xea)) / 0x2 + parseInt(_0x1f5d12(0xe8)) / 0x3 + -parseInt(_0x1f5d12(0xeb)) / 0x4 * (parseInt(_0x1f5d12(0xec)) / 0x5) + -parseInt(_0x1f5d12(0xe7)) / 0x6 * (-parseInt(_0x1f5d12(0xe1)) / 0x7) + parseInt(_0x1f5d12(0xe6)) / 0x8 * (-parseInt(_0x1f5d12(0xed)) / 0x9) + parseInt(_0x1f5d12(0xe5)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x5cf8, 0x5a83a));
function Main(input) {
    var _0x3ee6ed = a0_0x3fb0;
    input = input[_0x3ee6ed(0xee)]('\x0a');
    tmp = input[0x0][_0x3ee6ed(0xee)]('\x20');
    var N = Number(tmp[0x0]);
    var K = Number(tmp[0x1]);
    if (K === 0x1)
        return console[_0x3ee6ed(0xe2)](0x0);
    var current = Math['abs'](N - K);
    N = current;
    while (current >= N) {
        N = current;
        current = Math[_0x3ee6ed(0xe4)](N - K);
    }
    console[_0x3ee6ed(0xe2)](current);
}
function a0_0x5cf8() {
    var _0x5c677b = [
        '44217fquXvM',
        'split',
        '193319fhKAbE',
        'utf8',
        '24542zrxiTJ',
        'log',
        '/dev/stdin',
        'abs',
        '121860cwZowO',
        '968wIKKOX',
        '1122XlaoXs',
        '519102VYmSrj',
        'readFileSync',
        '993682UlLaWX',
        '79620IOnVUZ',
        '45GbZucm'
    ];
    a0_0x5cf8 = function () {
        return _0x5c677b;
    };
    return a0_0x5cf8();
}
Main(require('fs')[a0_0x29bc6b(0xe9)](a0_0x29bc6b(0xe3), a0_0x29bc6b(0xe0)));