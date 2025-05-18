function a0_0x3074(HuiGHi, key) {
    var stringArray = a0_0x35be();
    a0_0x3074 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3074(HuiGHi, key);
}
var a0_0x3aedfc = a0_0x3074;
var input = require('fs')[a0_0x3aedfc(0x0)]('/dev/stdin', 'utf8');
function a0_0x35be() {
    var _0x4c19a2 = [
        'readFileSync',
        'trim',
        'split',
        'slice',
        'log'
    ];
    a0_0x35be = function () {
        return _0x4c19a2;
    };
    return a0_0x35be();
}
var lines = input[a0_0x3aedfc(0x1)]()[a0_0x3aedfc(0x2)](/\n/g);
var n = +lines[0x0][a0_0x3aedfc(0x2)]('\x20')[0x0];
var m = +lines[0x0][a0_0x3aedfc(0x2)]('\x20')[0x1];
var A = lines[a0_0x3aedfc(0x3)](0x1, m);
var b = lines[a0_0x3aedfc(0x3)](m, m + m);
var ans;
for (var i = 0x0; i < n; i++) {
    ans = 0x0;
    for (var j = 0x0; j < m; j++) {
        ans += A[i][a0_0x3aedfc(0x2)]('\x20')[j] * b[j];
    }
    console[a0_0x3aedfc(0x4)](ans);
}