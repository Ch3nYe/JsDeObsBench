function a0_0x2563() {
    var _0x476948 = [
        'split',
        'reduce',
        'log',
        'ceil',
        'Yes',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x2563 = function () {
        return _0x476948;
    };
    return a0_0x2563();
}
function a0_0x3e56(KnBSbY, key) {
    var stringArray = a0_0x2563();
    a0_0x3e56 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3e56(KnBSbY, key);
}
var a0_0xf5a8be = a0_0x3e56;
function main(input) {
    var _0x378fa8 = a0_0x3e56;
    var line = input[_0x378fa8(0x0)](/\r?\n/g);
    var arr = line[0x0]['split']('\x20');
    const H = arr[0x0], N = arr[0x1];
    var A = line[0x1]['split']('\x20')['map'](Number);
    A = A[_0x378fa8(0x1)]((A, x) => A + x);
    console[_0x378fa8(0x2)](0x1 < Math[_0x378fa8(0x3)](H / A) ? 'No' : _0x378fa8(0x4));
}
main(require('fs')[a0_0xf5a8be(0x5)](a0_0xf5a8be(0x6), a0_0xf5a8be(0x7)));