function a0_0x4592(UirIFQ, key) {
    var stringArray = a0_0xd439();
    a0_0x4592 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4592(UirIFQ, key);
}
var a0_0x247577 = a0_0x4592;
function a0_0xd439() {
    var _0x136a73 = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim',
        'split',
        'map',
        'log'
    ];
    a0_0xd439 = function () {
        return _0x136a73;
    };
    return a0_0xd439();
}
var input = require('fs')[a0_0x247577(0x0)](a0_0x247577(0x1), a0_0x247577(0x2));
var [h, r] = input[a0_0x247577(0x3)]()[a0_0x247577(0x4)]('\x20')[a0_0x247577(0x5)](Number);
if (r + h == 0x0)
    console[a0_0x247577(0x6)](0x0);
else if (r + h > 0x0)
    console['log'](0x1);
else
    console[a0_0x247577(0x6)](-0x1);