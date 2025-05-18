function a0_0x57f7(jMedxl, key) {
    var stringArray = a0_0x461e();
    a0_0x57f7 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x57f7(jMedxl, key);
}
var a0_0x1d2205 = a0_0x57f7;
var input = require('fs')['readFileSync'](a0_0x1d2205(0x0), 'utf8');
var arr = input[a0_0x1d2205(0x1)]()[a0_0x1d2205(0x2)]('\x0a');
var n = arr[a0_0x1d2205(0x3)]() - 0x0;
var v = arr['shift']()[a0_0x1d2205(0x2)]('\x20')[a0_0x1d2205(0x4)](Number);
var cnt = 0x1;
for (var i = 0x0; i < n - 0x1; i++) {
    if (v[i] >= v[i + 0x1])
        cnt++;
}
function a0_0x461e() {
    var _0x4486fc = [
        '/dev/stdin',
        'trim',
        'split',
        'shift',
        'map',
        'log'
    ];
    a0_0x461e = function () {
        return _0x4486fc;
    };
    return a0_0x461e();
}
console['log'](cnt);
console[a0_0x1d2205(0x5)](n);