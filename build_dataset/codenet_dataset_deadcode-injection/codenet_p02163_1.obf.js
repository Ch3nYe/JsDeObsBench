var a0_0x239726 = a0_0x403a;
var input = require('fs')['readFileSync'](a0_0x239726(0x0), a0_0x239726(0x1));
var arr = input['trim']()[a0_0x239726(0x2)]('\x0a');
var n = arr[a0_0x239726(0x3)]() - 0x0;
var [a, b] = [
    0x0,
    0x1
];
arr['forEach'](v => {
    var _0x51137a = a0_0x403a;
    var [q, x] = v[_0x51137a(0x2)]('\x20')[_0x51137a(0x4)](Number);
    if (q == 0x1) {
        b *= x;
        a *= x;
    } else if (q == 0x2)
        a -= x;
    else if (q == 0x3)
        a += x;
});
function a0_0x5d8e() {
    var _0x181abd = [
        '/dev/stdin',
        'utf8',
        'split',
        'shift',
        'map',
        'log'
    ];
    a0_0x5d8e = function () {
        return _0x181abd;
    };
    return a0_0x5d8e();
}
function a0_0x403a(MTNELC, key) {
    var stringArray = a0_0x5d8e();
    a0_0x403a = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x403a(MTNELC, key);
}
console[a0_0x239726(0x5)](a + '\x20' + b);