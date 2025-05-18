var a0_0x4a153b = a0_0xae40;
function a0_0xae40(BywQYN, key) {
    var stringArray = a0_0x2438();
    a0_0xae40 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0xae40(BywQYN, key);
}
function Main(input) {
    var _0x2e20b8 = a0_0xae40;
    input = String(input);
    var len = input['length'];
    var first = input['substring'](0x0, 0x1);
    if (len < 0x4) {
        var mid = 0x1;
    } else {
        var mid = len - 0x2;
    }
    var last = input[_0x2e20b8(0x0)](len - 0x1, len);
    console[_0x2e20b8(0x1)]('%s', first + String(mid) + last);
}
Main(require('fs')[a0_0x4a153b(0x2)](a0_0x4a153b(0x3), a0_0x4a153b(0x4)));
function a0_0x2438() {
    var _0x2d6337 = [
        'substring',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x2438 = function () {
        return _0x2d6337;
    };
    return a0_0x2438();
}