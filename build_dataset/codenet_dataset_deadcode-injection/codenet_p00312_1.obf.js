var a0_0x15e640 = a0_0x72e6;
function a0_0x72e6(SwDeps, key) {
    var stringArray = a0_0xb29a();
    a0_0x72e6 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x72e6(SwDeps, key);
}
function a0_0xb29a() {
    var _0x4b4597 = [
        'readFileSync',
        'utf8',
        'trim',
        'map',
        'log'
    ];
    a0_0xb29a = function () {
        return _0x4b4597;
    };
    return a0_0xb29a();
}
var input = require('fs')[a0_0x15e640(0x0)]('/dev/stdin', a0_0x15e640(0x1));
var [D, L] = input[a0_0x15e640(0x2)]()['split']('\x20')[a0_0x15e640(0x3)](Number);
var amari = D % L;
var yakusuu = (D - amari) / L;
console[a0_0x15e640(0x4)](yakusuu + amari);