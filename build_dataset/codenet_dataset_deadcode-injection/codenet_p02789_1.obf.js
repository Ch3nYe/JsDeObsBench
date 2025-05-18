var a0_0x30a807 = a0_0x348e;
function a0_0x348e(DojCkQ, key) {
    var stringArray = a0_0x41e9();
    a0_0x348e = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x348e(DojCkQ, key);
}
function main(input) {
    var _0x53888f = a0_0x348e;
    var args = input[_0x53888f(0x0)]('\x20');
    var n = parseInt(args[0x0], 0xa);
    var m = parseInt(args[0x1], 0xa);
    if (n === m) {
        return _0x53888f(0x1);
    } else {
        return 'No';
    }
}
function a0_0x41e9() {
    var _0x2866c7 = [
        'split',
        'Yes',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x41e9 = function () {
        return _0x2866c7;
    };
    return a0_0x41e9();
}
console['log'](main(require('fs')[a0_0x30a807(0x2)](a0_0x30a807(0x3), a0_0x30a807(0x4))));