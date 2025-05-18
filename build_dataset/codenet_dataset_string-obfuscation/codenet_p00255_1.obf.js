var a0_0x28bb1c = a0_0x1eb6;
(function (stringArrayFunction, comparisonValue) {
    var _0x4baaf0 = a0_0x1eb6;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x4baaf0(0x1c6)) / 0x1 + -parseInt(_0x4baaf0(0x1d6)) / 0x2 * (-parseInt(_0x4baaf0(0x1ca)) / 0x3) + -parseInt(_0x4baaf0(0x1d4)) / 0x4 + -parseInt(_0x4baaf0(0x1ce)) / 0x5 + parseInt(_0x4baaf0(0x1c5)) / 0x6 * (-parseInt(_0x4baaf0(0x1cb)) / 0x7) + parseInt(_0x4baaf0(0x1c8)) / 0x8 + -parseInt(_0x4baaf0(0x1d3)) / 0x9;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0xc897, 0xdc8f0));
var input = require('fs')[a0_0x28bb1c(0x1cd)](a0_0x28bb1c(0x1d2), 'utf8');
var Arr = input['trim']()[a0_0x28bb1c(0x1c9)]('\x0a');
while (!![]) {
    var n = Arr[a0_0x28bb1c(0x1cf)]() - 0x0;
    if (n == 0x0)
        break;
    var p = Arr[a0_0x28bb1c(0x1cf)]()[a0_0x28bb1c(0x1c9)]('\x20')[a0_0x28bb1c(0x1c7)](Number);
    var j = Arr['shift']()[a0_0x28bb1c(0x1c9)]('\x20')['map'](Number);
    var sum = p[a0_0x28bb1c(0x1cc)](function (a, b) {
        return a + b;
    });
    j[a0_0x28bb1c(0x1d7)](function (a, b) {
        return b - a;
    });
    var max = sum * n;
    while (!![]) {
        if (j[a0_0x28bb1c(0x1d5)] == 0x0)
            break;
        n--;
        max = Math[a0_0x28bb1c(0x1d1)](max, (sum + j[a0_0x28bb1c(0x1cf)]()) * n);
    }
    console[a0_0x28bb1c(0x1d0)](max);
}
function a0_0x1eb6(fJiAOj, key) {
    var stringArray = a0_0xc897();
    a0_0x1eb6 = function (index, key) {
        index = index - 0x1c5;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1eb6(fJiAOj, key);
}
function a0_0xc897() {
    var _0xc087de = [
        '6bksFEH',
        '1723717pMBpsD',
        'map',
        '11896528EwelPn',
        'split',
        '541887hbKKYc',
        '6501593yryEor',
        'reduce',
        'readFileSync',
        '4229650ENJteD',
        'shift',
        'log',
        'max',
        '/dev/stdin',
        '1055826qWoJvj',
        '2383844juNKmN',
        'length',
        '2KuEBKy',
        'sort'
    ];
    a0_0xc897 = function () {
        return _0xc087de;
    };
    return a0_0xc897();
}