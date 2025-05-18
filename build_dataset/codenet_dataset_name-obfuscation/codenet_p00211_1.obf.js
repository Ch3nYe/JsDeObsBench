function GCD(_0x3adfbf, _0x200cc4) {
    var _0x5f4cd4 = Math['max'](_0x3adfbf, _0x200cc4);
    var _0x14abb0 = Math['min'](_0x3adfbf, _0x200cc4);
    while (_0x14abb0 != 0x0) {
        var _0x9cf57e = _0x14abb0;
        _0x14abb0 = _0x5f4cd4 % _0x14abb0;
        _0x5f4cd4 = _0x9cf57e;
    }
    return _0x5f4cd4;
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    var n = Arr['shift']() - 0x0;
    if (n == 0x0)
        break;
    var arr = [];
    for (var I = 0x0; I < n; I++) {
        var v = Arr['shift']()['split']('\x20')['map'](Number);
        var gcd = GCD(v[0x0], v[0x1]);
        arr['push']([
            v[0x0] / gcd,
            v[0x1] / gcd
        ]);
    }
    var lcm = 0x1;
    arr['forEach'](function (_0x21a123) {
        var _0x10fcb3 = GCD(_0x21a123[0x1], lcm);
        lcm = _0x21a123[0x1] * lcm / _0x10fcb3;
    });
    arr = arr['map'](function (_0x43b58d, _0x287ea3) {
        return _0x43b58d[0x0] * (lcm / _0x43b58d[0x1]);
    });
    var lcm = 0x1;
    arr['forEach'](function (_0x41e601) {
        var _0x56fe5d = GCD(_0x41e601, lcm);
        lcm = _0x41e601 * lcm / _0x56fe5d;
    });
    arr['forEach'](function (_0x4769de) {
        console['log'](lcm / _0x4769de);
    });
}