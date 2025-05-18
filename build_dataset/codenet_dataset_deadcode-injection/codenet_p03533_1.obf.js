function a0_0x1ad6(hdnNXA, key) {
    var stringArray = a0_0x3539();
    a0_0x1ad6 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1ad6(hdnNXA, key);
}
var a0_0xfc9109 = a0_0x1ad6;
function a0_0x3539() {
    var _0x49f86b = [
        'readFileSync',
        'utf8',
        'log',
        'trim',
        'match'
    ];
    a0_0x3539 = function () {
        return _0x49f86b;
    };
    return a0_0x3539();
}
var s = require('fs')[a0_0xfc9109(0x0)]('/dev/stdin', a0_0xfc9109(0x1));
console[a0_0xfc9109(0x2)](s[a0_0xfc9109(0x3)]()[a0_0xfc9109(0x4)](/^A?KIHA?BA?RA?$/) ? 'YES' : 'NO');