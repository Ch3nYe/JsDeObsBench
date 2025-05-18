var a0_0x3a7c42 = a0_0x2199;
var input = require('fs')[a0_0x3a7c42(0x0)](a0_0x3a7c42(0x1), 'utf8');
var arr = input['trim']()[a0_0x3a7c42(0x2)]('\x0a');
var n = arr[a0_0x3a7c42(0x3)]() - 0x0;
var xyz = [];
for (var i = 0x0; i <= n; i++)
    xyz[i] = [
        0x0,
        0x0,
        0x0
    ];
var x = arr[a0_0x3a7c42(0x3)]()[a0_0x3a7c42(0x2)]('\x20')[a0_0x3a7c42(0x4)](Number);
var y = arr['shift']()['split']('\x20')['map'](Number);
var z = arr[a0_0x3a7c42(0x3)]()[a0_0x3a7c42(0x2)]('\x20')[a0_0x3a7c42(0x4)](Number);
function a0_0x40cc() {
    var _0x26d527 = [
        'readFileSync',
        '/dev/stdin',
        'split',
        'shift',
        'map',
        'forEach'
    ];
    a0_0x40cc = function () {
        return _0x26d527;
    };
    return a0_0x40cc();
}
x[a0_0x3a7c42(0x3)]();
y[a0_0x3a7c42(0x3)]();
z[a0_0x3a7c42(0x3)]();
x['forEach'](v => {
    xyz[v][0x0] = 0x1;
});
y[a0_0x3a7c42(0x5)](v => {
    xyz[v][0x1] = 0x1;
});
z[a0_0x3a7c42(0x5)](v => {
    xyz[v][0x2] = 0x1;
});
xyz[a0_0x3a7c42(0x3)]();
var cnt = 0x0;
xyz[a0_0x3a7c42(0x5)](v => {
    if (v[0x0] == 0x0 && v[0x2] == 0x1)
        cnt++;
    else if (v[0x1] == 0x1 && v[0x2] == 0x1)
        cnt++;
});
function a0_0x2199(vmrSFU, key) {
    var stringArray = a0_0x40cc();
    a0_0x2199 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2199(vmrSFU, key);
}
console['log'](cnt);