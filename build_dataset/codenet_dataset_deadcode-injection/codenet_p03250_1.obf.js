var a0_0x5e7bf6 = a0_0x1a1e;
function a0_0x1a1e(SuCHMc, key) {
    var stringArray = a0_0x3129();
    a0_0x1a1e = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1a1e(SuCHMc, key);
}
function main(input) {
    var _0x1e601e = a0_0x1a1e;
    abc = input['split']('\x20');
    abc = abc[_0x1e601e(0x0)]();
    a = '';
    a += abc[0x2];
    a += abc[0x1];
    a = parseInt(a, 0xa);
    b = parseInt(abc[0x0], 0xa);
    console['log'](a + b);
}
main(require('fs')[a0_0x5e7bf6(0x1)](a0_0x5e7bf6(0x2), a0_0x5e7bf6(0x3)));
function a0_0x3129() {
    var _0x42d968 = [
        'sort',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x3129 = function () {
        return _0x42d968;
    };
    return a0_0x3129();
}