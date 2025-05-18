var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
var n = arr['shift']()['split']('\x20')[0x0] - 0x0;
var x = [];
for (var i = 0x1; i <= n; i++)
    x['push']([
        i,
        -0x1 * i
    ]);
arr['forEach'](function (_0x167326, _0x2bce27) {
    x[_0x167326 - 0x0 - 0x1][0x1] = _0x2bce27;
});
x['sort'](function (_0x2f0c80, _0x1df7b6) {
    return _0x1df7b6[0x1] - _0x2f0c80[0x1];
});
x = x['map'](function (_0x42ff5b) {
    return _0x42ff5b[0x0];
});
console['log'](x['join']('\x0a'));