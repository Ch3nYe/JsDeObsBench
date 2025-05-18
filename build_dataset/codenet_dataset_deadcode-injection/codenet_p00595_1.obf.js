function a0_0x509d() {
    var _0x4fdc1c = [
        'readFileSync',
        'utf8',
        'trim',
        'split',
        'map',
        'min',
        'log'
    ];
    a0_0x509d = function () {
        return _0x4fdc1c;
    };
    return a0_0x509d();
}
var a0_0x3409d6 = a0_0x2f5e;
function a0_0x2f5e(iquWcZ, key) {
    var stringArray = a0_0x509d();
    a0_0x2f5e = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2f5e(iquWcZ, key);
}
var input = require('fs')[a0_0x3409d6(0x0)]('/dev/stdin', a0_0x3409d6(0x1));
var Arr = input[a0_0x3409d6(0x2)]()[a0_0x3409d6(0x3)]('\x0a');
Arr['forEach'](function (v) {
    var _0x25d317 = a0_0x2f5e;
    var arr = v[_0x25d317(0x3)]('\x20')[_0x25d317(0x4)](Number);
    var m = Math['max'](arr[0x0], arr[0x1]);
    var n = Math[_0x25d317(0x5)](arr[0x0], arr[0x1]);
    while (n != 0x0) {
        var N = n;
        n = m % n;
        m = N;
    }
    console[_0x25d317(0x6)](m);
});