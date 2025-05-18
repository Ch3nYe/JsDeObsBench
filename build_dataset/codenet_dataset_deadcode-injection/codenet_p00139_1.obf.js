function a0_0x5242(bEcwJB, key) {
    var stringArray = a0_0x1be2();
    a0_0x5242 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5242(bEcwJB, key);
}
var a0_0xdd9c8e = a0_0x5242;
var input = require('fs')['readFileSync'](a0_0xdd9c8e(0x0), 'utf8');
var Arr = input[a0_0xdd9c8e(0x1)](/\n$/, '')['split']('\x0a');
function a0_0x1be2() {
    var _0x333829 = [
        '/dev/stdin',
        'replace',
        'shift',
        'log'
    ];
    a0_0x1be2 = function () {
        return _0x333829;
    };
    return a0_0x1be2();
}
var n = Arr[a0_0xdd9c8e(0x2)]();
for (var i = 0x0; i < n; i++) {
    if (/^>'(=+)#\1~$/['test'](Arr[i]))
        console['log']('A');
    else if (/^>\^(Q=)+~~$/['test'](Arr[i]))
        console[a0_0xdd9c8e(0x3)]('B');
    else
        console[a0_0xdd9c8e(0x3)]('NA');
}