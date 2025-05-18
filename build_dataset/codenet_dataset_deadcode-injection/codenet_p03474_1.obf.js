function a0_0x22b0(ZsFqWw, key) {
    var stringArray = a0_0x4273();
    a0_0x22b0 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x22b0(ZsFqWw, key);
}
var a0_0x21e4a2 = a0_0x22b0;
function Main(input) {
    var _0x2dd1df = a0_0x22b0;
    input = input[_0x2dd1df(0x0)]('\x0a');
    var a = parseInt(input[0x0][_0x2dd1df(0x0)]('\x20')[0x0], 0xa);
    var b = parseInt(input[0x0][_0x2dd1df(0x0)]('\x20')[0x1], 0xa);
    var s = input[0x1];
    var regex = new RegExp('^[0-9]{' + a + '}-[0-9]{' + b + '}$', 'g');
    var f = s['match'](regex);
    console[_0x2dd1df(0x1)](f == null ? 'No' : 'Yes');
}
Main(require('fs')[a0_0x21e4a2(0x2)](a0_0x21e4a2(0x3), a0_0x21e4a2(0x4)));
function a0_0x4273() {
    var _0x1a96a8 = [
        'split',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x4273 = function () {
        return _0x1a96a8;
    };
    return a0_0x4273();
}