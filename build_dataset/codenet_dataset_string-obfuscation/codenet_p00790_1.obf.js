var a0_0x37e2ce = a0_0x21dc;
(function (stringArrayFunction, comparisonValue) {
    var _0x55605e = a0_0x21dc;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x55605e(0xf6)) / 0x1 + -parseInt(_0x55605e(0xfa)) / 0x2 * (parseInt(_0x55605e(0xf8)) / 0x3) + -parseInt(_0x55605e(0xef)) / 0x4 * (parseInt(_0x55605e(0xf3)) / 0x5) + parseInt(_0x55605e(0xf7)) / 0x6 + -parseInt(_0x55605e(0xfb)) / 0x7 + -parseInt(_0x55605e(0xf2)) / 0x8 * (parseInt(_0x55605e(0xf9)) / 0x9) + parseInt(_0x55605e(0xfc)) / 0xa * (parseInt(_0x55605e(0xf5)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x51a1, 0x66655));
function move(d1, d2, d3, d4, d5, d6) {
    var _0x21a18f = a0_0x21dc;
    var x = this[_0x21a18f(0xf1)]();
    if (x == 's')
        return [
            d2,
            d6,
            d3,
            d4,
            d1,
            d5
        ];
    else if (x == 'n')
        return [
            d5,
            d1,
            d3,
            d4,
            d6,
            d2
        ];
    else if (x == 'w')
        return [
            d4,
            d2,
            d1,
            d6,
            d5,
            d3
        ];
    else if (x == 'e')
        return [
            d3,
            d2,
            d6,
            d1,
            d5,
            d4
        ];
}
function a0_0x51a1() {
    var _0x2dad45 = [
        '1044yEpAYc',
        '989116jggAnX',
        '1208571XoYAHv',
        '71580jkiNjn',
        '/dev/stdin',
        '70936bQDCKL',
        'log',
        'toString',
        '3112nqzQMk',
        '70mVjAIR',
        'shift',
        '1771emvUaG',
        '113856sDskfN',
        '2048652nnihfH',
        '3DMsllG'
    ];
    a0_0x51a1 = function () {
        return _0x2dad45;
    };
    return a0_0x51a1();
}
var input = require('fs')['readFileSync'](a0_0x37e2ce(0xee), 'utf8');
function a0_0x21dc(qTciNb, key) {
    var stringArray = a0_0x51a1();
    a0_0x21dc = function (index, key) {
        index = index - 0xee;
        var value = stringArray[index];
        return value;
    };
    return a0_0x21dc(qTciNb, key);
}
var arr = input['trim']()['split']('\x0a');
while (!![]) {
    var n = arr['shift']() - 0x0;
    if (n == 0x0)
        break;
    var dice = [
        0x1,
        0x2,
        0x3,
        0x4,
        0x5,
        0x6
    ];
    while (n--) {
        var str = arr[a0_0x37e2ce(0xf4)]();
        dice = move['apply'](str[0x0], dice);
    }
    console[a0_0x37e2ce(0xf0)](dice[0x0]);
}