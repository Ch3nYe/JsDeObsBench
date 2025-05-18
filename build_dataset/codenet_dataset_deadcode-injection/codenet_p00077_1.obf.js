var a0_0x1bcc6f = a0_0x1c30;
var input = require('fs')['readFileSync'](a0_0x1bcc6f(0x0), a0_0x1bcc6f(0x1));
function a0_0x1c30(IBBaqy, key) {
    var stringArray = a0_0x14ee();
    a0_0x1c30 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1c30(IBBaqy, key);
}
function a0_0x14ee() {
    var _0x59d901 = [
        '/dev/stdin',
        'utf8',
        'trim',
        'forEach',
        'replace',
        'join',
        'log'
    ];
    a0_0x14ee = function () {
        return _0x59d901;
    };
    return a0_0x14ee();
}
var Arr = input[a0_0x1bcc6f(0x2)]()['split']('\x0a');
Arr[a0_0x1bcc6f(0x3)](function (v) {
    var _0x5722db = a0_0x1c30;
    v = v[_0x5722db(0x4)](/@(\d)(.)/g, function (s, s1, s2) {
        var _0x46e18d = a0_0x1c30;
        return Array(s1 - 0x0 + 0x1)[_0x46e18d(0x5)](s2);
    });
    console[_0x5722db(0x6)](v);
});