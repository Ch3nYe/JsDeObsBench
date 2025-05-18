function lcs(_0x214686, _0xab7fcd) {
    var _0x2368e5 = _0x214686['length'];
    var _0x3b8359 = _0xab7fcd['length'];
    for (var _0x2ead91 = 0x1; _0x2ead91 <= _0x2368e5; _0x2ead91++) {
        c[_0x2ead91][0x0] = 0x0;
    }
    for (var _0x1c28a0 = 0x1; _0x1c28a0 <= _0x3b8359; _0x1c28a0++) {
        c[0x0][_0x1c28a0] = 0x0;
    }
    for (var _0x2ead91 = 0x1; _0x2ead91 <= _0x2368e5; _0x2ead91++) {
        for (var _0x1c28a0 = 0x1; _0x1c28a0 <= _0x3b8359; _0x1c28a0++) {
            if (_0x214686[_0x2ead91] == _0xab7fcd[_0x1c28a0]) {
                c[_0x2ead91][_0x1c28a0] = c[_0x2ead91 - 0x1][_0x1c28a0 - 0x1] + 0x1;
            } else if (c[_0x2ead91 - 0x1][_0x1c28a0] >= c[_0x2ead91][_0x1c28a0 - 0x1]) {
                c[_0x2ead91][_0x1c28a0] = c[_0x2ead91 - 0x1][_0x1c28a0];
            } else {
                c[_0x2ead91][_0x1c28a0] = c[_0x2ead91][_0x1c28a0 - 0x1];
            }
        }
    }
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']();
var lines = input['split']('\x0a');
var n = +lines['shift']() - 0x0;
for (var idx = 0x0; idx < n; idx++) {
    var a = lines['shift']();
    var b = lines['shift']();
    var c = [[0x0]];
    for (var i = 0x1; i <= a['length']; i++) {
        var arr = [-0x1];
        c['push'](arr);
    }
    lcs(a, b);
    console['log'](c[a['length']][b['length']]);
}