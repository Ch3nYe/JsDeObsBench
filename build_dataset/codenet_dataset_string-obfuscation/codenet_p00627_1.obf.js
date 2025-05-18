var a0_0x482678 = a0_0x59ec;
function a0_0x3bba() {
    var _0x2598df = [
        'map',
        'log',
        'readFileSync',
        '11589450YAqUSU',
        '1460bWrLie',
        '17904XXfGHN',
        '14vMsvyL',
        '/dev/stdin',
        '2098017xCaDhg',
        '4347112gGIOdJ',
        'trim',
        '6RTRUoz',
        '2519152iCoOYL',
        '5870547DlPPYl',
        'length',
        'split',
        '275118IWhhov'
    ];
    a0_0x3bba = function () {
        return _0x2598df;
    };
    return a0_0x3bba();
}
(function (stringArrayFunction, comparisonValue) {
    var _0x2506f5 = a0_0x59ec;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x2506f5(0x103)) / 0x1 * (parseInt(_0x2506f5(0x108)) / 0x2) + -parseInt(_0x2506f5(0x100)) / 0x3 + parseInt(_0x2506f5(0x101)) / 0x4 + parseInt(_0x2506f5(0xfc)) / 0x5 * (parseInt(_0x2506f5(0xfd)) / 0x6) + parseInt(_0x2506f5(0xfe)) / 0x7 * (parseInt(_0x2506f5(0x104)) / 0x8) + -parseInt(_0x2506f5(0x105)) / 0x9 + -parseInt(_0x2506f5(0x10c)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x3bba, 0xdc619));
function a0_0x59ec(qbHVRu, key) {
    var stringArray = a0_0x3bba();
    a0_0x59ec = function (index, key) {
        index = index - 0xfc;
        var value = stringArray[index];
        return value;
    };
    return a0_0x59ec(qbHVRu, key);
}
var input = require('fs')[a0_0x482678(0x10b)](a0_0x482678(0xff), 'utf8');
var Arr = input[a0_0x482678(0x102)]()[a0_0x482678(0x107)]('\x0a')[a0_0x482678(0x109)](Number);
while (Arr[a0_0x482678(0x106)] != 0x0) {
    var n = Arr['shift']() / 0x4;
    if (n == 0x0)
        break;
    var sum = 0x0;
    while (n != 0x0) {
        sum += Arr['shift']();
        n--;
    }
    console[a0_0x482678(0x10a)](sum);
}