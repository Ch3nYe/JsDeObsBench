var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    var n = Arr['shift']() - 0x0;
    if (n == 0x0)
        break;
    var p = Arr['shift']()['split']('\x20')['map'](Number);
    var j = Arr['shift']()['split']('\x20')['map'](Number);
    var sum = p['reduce'](function (_0x53f949, _0x42ea08) {
        return _0x53f949 + _0x42ea08;
    });
    j['sort'](function (_0x338e01, _0x336218) {
        return _0x336218 - _0x338e01;
    });
    var max = sum * n;
    while (!![]) {
        if (j['length'] == 0x0)
            break;
        n--;
        max = Math['max'](max, (sum + j['shift']()) * n);
    }
    console['log'](max);
}