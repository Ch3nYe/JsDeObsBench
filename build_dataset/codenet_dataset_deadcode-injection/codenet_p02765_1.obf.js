var a0_0x2f3459 = a0_0x3269;
function a0_0x3269(DaEsOG, key) {
    var stringArray = a0_0xedc8();
    a0_0x3269 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3269(DaEsOG, key);
}
function main(input) {
    var _0x3101ba = a0_0x3269;
    var marginDelete = input['trim']();
    var args = marginDelete[_0x3101ba(0x0)]('\x20');
    var n = parseInt(args[0x0], 0xa);
    var r = parseInt(args[0x1], 0xa);
    var hiddenRating;
    if (n >= 0xa) {
        hiddenRating = r;
    } else {
        var argument = 0x64 * (0xa - n);
        hiddenRating = r + argument;
    }
    return hiddenRating;
}
function a0_0xedc8() {
    var _0x3bb26b = [
        'split',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0xedc8 = function () {
        return _0x3bb26b;
    };
    return a0_0xedc8();
}
console['log'](main(require('fs')[a0_0x2f3459(0x1)](a0_0x2f3459(0x2), a0_0x2f3459(0x3))));