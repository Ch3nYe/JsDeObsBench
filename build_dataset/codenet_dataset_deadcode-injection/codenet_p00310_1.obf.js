function a0_0x1b29(shmmPl, key) {
    var stringArray = a0_0x3668();
    a0_0x1b29 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1b29(shmmPl, key);
}
var a0_0x38f578 = a0_0x1b29;
var input = require('fs')[a0_0x38f578(0x0)]('/dev/stdin', a0_0x38f578(0x1));
function a0_0x3668() {
    var _0x3eb161 = [
        'readFileSync',
        'utf8',
        'trim',
        'split',
        'map',
        'log'
    ];
    a0_0x3668 = function () {
        return _0x3eb161;
    };
    return a0_0x3668();
}
var [p, m, c] = input[a0_0x38f578(0x2)]()[a0_0x38f578(0x3)]('\x20')[a0_0x38f578(0x4)](Number);
console[a0_0x38f578(0x5)](p + m + c);