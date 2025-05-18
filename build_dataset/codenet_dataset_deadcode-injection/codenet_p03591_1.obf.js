function a0_0x1c23(yHHvPH, key) {
    var stringArray = a0_0x3874();
    a0_0x1c23 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1c23(yHHvPH, key);
}
function a0_0x3874() {
    var _0x5b328c = [
        'substr',
        'YAKI',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x3874 = function () {
        return _0x5b328c;
    };
    return a0_0x3874();
}
var a0_0x3aa11d = a0_0x1c23;
function Main(input) {
    var _0x46d555 = a0_0x1c23;
    if (input[_0x46d555(0x0)](0x0, 0x4) == _0x46d555(0x1)) {
        console[_0x46d555(0x2)]('Yes');
    } else {
        console[_0x46d555(0x2)]('No');
    }
}
Main(require('fs')[a0_0x3aa11d(0x3)](a0_0x3aa11d(0x4), a0_0x3aa11d(0x5))['trim']());