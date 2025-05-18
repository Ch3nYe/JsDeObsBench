function a0_0x1683() {
    var _0x575681 = [
        '2044164TEcRrF',
        '9RccejL',
        '2013100FYAkqV',
        '686042hJjwws',
        'trim',
        'map',
        'split',
        '71458owAHRm',
        '14JxIbof',
        '4510816krljNn',
        'shift',
        'log',
        '/dev/stdin',
        '8421954OzhIVu',
        '8SGzvOZ',
        '11426510UUxLGR'
    ];
    a0_0x1683 = function () {
        return _0x575681;
    };
    return a0_0x1683();
}
function a0_0x4179(IZcchy, key) {
    var stringArray = a0_0x1683();
    a0_0x4179 = function (index, key) {
        index = index - 0x194;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4179(IZcchy, key);
}
var a0_0x5f4eda = a0_0x4179;
(function (stringArrayFunction, comparisonValue) {
    var _0xbe48a = a0_0x4179;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0xbe48a(0x1a0)) / 0x1 * (parseInt(_0xbe48a(0x19f)) / 0x2) + -parseInt(_0xbe48a(0x198)) / 0x3 * (-parseInt(_0xbe48a(0x196)) / 0x4) + -parseInt(_0xbe48a(0x19a)) / 0x5 + -parseInt(_0xbe48a(0x195)) / 0x6 + parseInt(_0xbe48a(0x19b)) / 0x7 + -parseInt(_0xbe48a(0x1a1)) / 0x8 + parseInt(_0xbe48a(0x199)) / 0x9 * (parseInt(_0xbe48a(0x197)) / 0xa);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x1683, 0xb3144));
var input = require('fs')['readFileSync'](a0_0x5f4eda(0x194), 'utf8');
var arr = input[a0_0x5f4eda(0x19c)]()[a0_0x5f4eda(0x19e)]('\x0a')[a0_0x5f4eda(0x19d)](Number);
while (!![]) {
    var n = arr[a0_0x5f4eda(0x1a2)]();
    if (n == 0x0)
        break;
    var max = 0x0;
    for (var i = 0x0; i <= 0x36; i++) {
        for (var j = 0x0; j <= 0x60; j++) {
            var sum = i * i * i + j * (j + 0x1) * (j + 0x2) / 0x6;
            if (n >= sum)
                max = Math['max'](max, sum);
        }
    }
    console[a0_0x5f4eda(0x1a3)](max);
}