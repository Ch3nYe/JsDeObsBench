var a0_0x5913f7 = a0_0x3f04;
(function (stringArrayFunction, comparisonValue) {
    var _0x2dded3 = a0_0x3f04;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x2dded3(0x109)) / 0x1 * (-parseInt(_0x2dded3(0x102)) / 0x2) + -parseInt(_0x2dded3(0x100)) / 0x3 + -parseInt(_0x2dded3(0x108)) / 0x4 * (-parseInt(_0x2dded3(0x113)) / 0x5) + -parseInt(_0x2dded3(0x101)) / 0x6 * (-parseInt(_0x2dded3(0x110)) / 0x7) + -parseInt(_0x2dded3(0x111)) / 0x8 * (-parseInt(_0x2dded3(0x112)) / 0x9) + parseInt(_0x2dded3(0x10f)) / 0xa * (-parseInt(_0x2dded3(0x107)) / 0xb) + -parseInt(_0x2dded3(0x103)) / 0xc;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x5758, 0xbd6f6));
var input = require('fs')[a0_0x5913f7(0x106)]('/dev/stdin', a0_0x5913f7(0x10b));
var arr = input[a0_0x5913f7(0x10d)]()[a0_0x5913f7(0x10c)]('\x0a');
var [h, w] = arr[a0_0x5913f7(0x105)]()[a0_0x5913f7(0x10c)]('\x20')[a0_0x5913f7(0x10e)](Number);
var b = [];
function a0_0x3f04(qlugsU, key) {
    var stringArray = a0_0x5758();
    a0_0x3f04 = function (index, key) {
        index = index - 0x100;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3f04(qlugsU, key);
}
for (var i = 0x0; i < h; i++) {
    arr[a0_0x5913f7(0x105)]()[a0_0x5913f7(0x10c)]('')['forEach']((v, j) => {
        var _0x43b9e4 = a0_0x5913f7;
        if (v == 'B')
            b[_0x43b9e4(0x104)]([
                i,
                j
            ]);
    });
}
function a0_0x5758() {
    var _0xe18db1 = [
        'shift',
        'readFileSync',
        '2211715UdGCnU',
        '4svinHq',
        '1504321rniild',
        'log',
        'utf8',
        'split',
        'trim',
        'map',
        '10aliBDH',
        '23464RmuZLo',
        '428208cwyvzB',
        '117BjIBkx',
        '1185745OOIFCy',
        'length',
        'abs',
        '1813308jGwZMO',
        '924vyHcDg',
        '2xCSXgB',
        '16465068RFGzGE',
        'push'
    ];
    a0_0x5758 = function () {
        return _0xe18db1;
    };
    return a0_0x5758();
}
var max = 0x0;
for (var i = 0x0; i < b[a0_0x5913f7(0x114)]; i++) {
    for (var j = i + 0x1; j < b[a0_0x5913f7(0x114)]; j++) {
        var d = Math[a0_0x5913f7(0x115)](b[i][0x0] - b[j][0x0]) + Math[a0_0x5913f7(0x115)](b[i][0x1] - b[j][0x1]);
        max = Math['max'](max, d);
    }
}
console[a0_0x5913f7(0x10a)](max);