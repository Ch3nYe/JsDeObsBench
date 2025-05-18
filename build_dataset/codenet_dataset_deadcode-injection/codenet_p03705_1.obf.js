function a0_0x2b2a(JEoWci, key) {
    var stringArray = a0_0x5557();
    a0_0x2b2a = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2b2a(JEoWci, key);
}
var a0_0x9b6d8d = a0_0x2b2a;
function a0_0x5557() {
    var _0x1640a4 = [
        'split',
        'log',
        'max',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x5557 = function () {
        return _0x1640a4;
    };
    return a0_0x5557();
}
main = function (input) {
    var _0x557778 = a0_0x2b2a;
    var data = input[_0x557778(0x0)]('\x20');
    var n = parseInt(data[0x0]);
    var a = parseInt(data[0x1]);
    var b = parseInt(data[0x2]);
    var ans = (n - 0x2) * (b - a) + 0x1;
    console[_0x557778(0x1)](Math[_0x557778(0x2)](ans, 0x0));
};
main(require('fs')[a0_0x9b6d8d(0x3)](a0_0x9b6d8d(0x4), a0_0x9b6d8d(0x5)));