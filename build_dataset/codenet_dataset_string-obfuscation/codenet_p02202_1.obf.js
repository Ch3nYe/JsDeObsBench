var a0_0x3694ff = a0_0x3957;
(function (stringArrayFunction, comparisonValue) {
    var _0x418d40 = a0_0x3957;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x418d40(0x110)) / 0x1 * (parseInt(_0x418d40(0x11a)) / 0x2) + parseInt(_0x418d40(0x114)) / 0x3 + -parseInt(_0x418d40(0x115)) / 0x4 * (-parseInt(_0x418d40(0x10f)) / 0x5) + -parseInt(_0x418d40(0x11b)) / 0x6 * (-parseInt(_0x418d40(0x10c)) / 0x7) + parseInt(_0x418d40(0x116)) / 0x8 + parseInt(_0x418d40(0x10e)) / 0x9 + parseInt(_0x418d40(0x10d)) / 0xa * (-parseInt(_0x418d40(0x113)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x4b8d, 0x78f36));
function a0_0x3957(qNBBDU, key) {
    var stringArray = a0_0x4b8d();
    a0_0x3957 = function (index, key) {
        index = index - 0x10c;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3957(qNBBDU, key);
}
var input = require('fs')['readFileSync']('/dev/stdin', a0_0x3694ff(0x11c));
var arr = input[a0_0x3694ff(0x118)]()[a0_0x3694ff(0x119)]('\x0a');
var n = arr[a0_0x3694ff(0x112)]() - 0x0;
function a0_0x4b8d() {
    var _0x544429 = [
        '501897pOJZYu',
        '40NJwveB',
        '6718448zXxkld',
        'map',
        'trim',
        'split',
        '300XunFKL',
        '6YDIDkl',
        'utf8',
        '2432087ZtKXeD',
        '350SubRno',
        '4027662FJAHAI',
        '360075JCSpNe',
        '761qkvibj',
        'log',
        'shift',
        '672870xhOath'
    ];
    a0_0x4b8d = function () {
        return _0x544429;
    };
    return a0_0x4b8d();
}
var v = arr[a0_0x3694ff(0x112)]()[a0_0x3694ff(0x119)]('\x20')[a0_0x3694ff(0x117)](Number);
var sum = 0x0;
for (var i = 0x0; i < n; i++) {
    sum += v[i] - (i + 0x1);
}
console[a0_0x3694ff(0x111)](sum);