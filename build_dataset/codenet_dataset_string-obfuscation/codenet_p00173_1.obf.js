var a0_0x4988ad = a0_0x2da3;
function a0_0x2e3c() {
    var _0x40eb51 = [
        '679600TYBKSH',
        '1709806Utdqzj',
        '676Wcabmx',
        '45474IOUGgf',
        '176083CJfpDv',
        'readFileSync',
        '2535JXLJVu',
        'trim',
        '9Opqzlc',
        '5yphYku',
        'utf8',
        '296600vvcIWJ',
        '41308uUmvQc'
    ];
    a0_0x2e3c = function () {
        return _0x40eb51;
    };
    return a0_0x2e3c();
}
function a0_0x2da3(OfGjLS, key) {
    var stringArray = a0_0x2e3c();
    a0_0x2da3 = function (index, key) {
        index = index - 0x13b;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2da3(OfGjLS, key);
}
(function (stringArrayFunction, comparisonValue) {
    var _0x55de21 = a0_0x2da3;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x55de21(0x13f)) / 0x1 + parseInt(_0x55de21(0x147)) / 0x2 + parseInt(_0x55de21(0x141)) / 0x3 * (parseInt(_0x55de21(0x13d)) / 0x4) + -parseInt(_0x55de21(0x144)) / 0x5 * (-parseInt(_0x55de21(0x13e)) / 0x6) + parseInt(_0x55de21(0x13c)) / 0x7 + -parseInt(_0x55de21(0x146)) / 0x8 * (parseInt(_0x55de21(0x143)) / 0x9) + -parseInt(_0x55de21(0x13b)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x2e3c, 0x20c22));
var input = require('fs')[a0_0x4988ad(0x140)]('/dev/stdin', a0_0x4988ad(0x145));
var Arr = input[a0_0x4988ad(0x142)]()['split']('\x0a');
for (var i = 0x0; i < Arr['length']; i++) {
    var arr = Arr[i]['split']('\x20');
    var a = arr[0x1] - 0x0 + (arr[0x2] - 0x0);
    var b = (arr[0x1] - 0x0) * 0xc8 + (arr[0x2] - 0x0) * 0x12c;
    console['log'](arr[0x0] + '\x20' + a + '\x20' + b);
}