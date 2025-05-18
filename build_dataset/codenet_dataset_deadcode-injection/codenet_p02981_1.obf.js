var a0_0x29ae9b = a0_0x20be;
var main = standardInput => {
    var _0x4083e1 = a0_0x20be;
    var lengthList = standardInput[_0x4083e1(0x0)]('\x20');
    var n = Number[_0x4083e1(0x1)](lengthList[0x0]);
    var a = Number[_0x4083e1(0x1)](lengthList[0x1]);
    var b = Number[_0x4083e1(0x1)](lengthList[0x2]);
    if (n * a >= b) {
        console[_0x4083e1(0x2)](b);
    } else {
        console[_0x4083e1(0x2)](n * a);
    }
};
function a0_0x20be(VOXLoo, key) {
    var stringArray = a0_0x3a73();
    a0_0x20be = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x20be(VOXLoo, key);
}
main(require('fs')[a0_0x29ae9b(0x3)](a0_0x29ae9b(0x4), a0_0x29ae9b(0x5)));
function a0_0x3a73() {
    var _0x5e3134 = [
        'split',
        'parseInt',
        'log',
        'readFileSync',
        '/dev/stdin',
        'UTF-8'
    ];
    a0_0x3a73 = function () {
        return _0x5e3134;
    };
    return a0_0x3a73();
}