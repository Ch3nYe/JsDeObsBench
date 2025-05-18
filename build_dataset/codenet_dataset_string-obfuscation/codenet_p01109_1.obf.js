var a0_0x15f9c2 = a0_0x4249;
(function (stringArrayFunction, comparisonValue) {
    var _0x263958 = a0_0x4249;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x263958(0xf5)) / 0x1 + -parseInt(_0x263958(0xed)) / 0x2 * (-parseInt(_0x263958(0xf0)) / 0x3) + parseInt(_0x263958(0xf6)) / 0x4 * (-parseInt(_0x263958(0xf8)) / 0x5) + -parseInt(_0x263958(0xe9)) / 0x6 + -parseInt(_0x263958(0xea)) / 0x7 + parseInt(_0x263958(0xf2)) / 0x8 + parseInt(_0x263958(0xf7)) / 0x9;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x13bf, 0x71d27));
var input = require('fs')[a0_0x15f9c2(0xef)](a0_0x15f9c2(0xf3), 'utf8');
function a0_0x4249(LrgZFL, key) {
    var stringArray = a0_0x13bf();
    a0_0x4249 = function (index, key) {
        index = index - 0xe9;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4249(LrgZFL, key);
}
var arr = input[a0_0x15f9c2(0xec)]()[a0_0x15f9c2(0xf1)]('\x0a');
function a0_0x13bf() {
    var _0x4821f9 = [
        '158176fCXKtM',
        '10263366JAojOo',
        '105mrkOXU',
        'shift',
        '1565868Gbgmgs',
        '960876sECYPC',
        'log',
        'trim',
        '908PmojRd',
        'filter',
        'readFileSync',
        '1731FEwtyS',
        'split',
        '5409712XswTcu',
        '/dev/stdin',
        'reduce',
        '383661fpmByF'
    ];
    a0_0x13bf = function () {
        return _0x4821f9;
    };
    return a0_0x13bf();
}
while (!![]) {
    var n = arr[a0_0x15f9c2(0xf9)]() - 0x0;
    if (n == 0x0)
        break;
    var a = arr['shift']()[a0_0x15f9c2(0xf1)]('\x20')['map'](Number);
    var sum = a[a0_0x15f9c2(0xf4)]((a, b) => a + b);
    console[a0_0x15f9c2(0xeb)](a[a0_0x15f9c2(0xee)](v => v <= sum / n)['length']);
}