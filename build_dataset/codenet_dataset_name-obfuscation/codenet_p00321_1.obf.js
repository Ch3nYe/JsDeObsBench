var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
var nf = arr['shift']()['split']('\x20')['map'](Number);
var f = nf[0x1];
var obj = {};
arr = arr['map'](function (_0x4d54a1) {
    _0x4d54a1 = _0x4d54a1['split']('\x20');
    _0x4d54a1['shift']();
    _0x4d54a1['forEach'](function (_0x16a448) {
        obj[_0x16a448] = {};
    });
    return _0x4d54a1;
});
for (var k in obj) {
    for (var K in obj) {
        obj[k][K] = 0x0;
    }
}
arr['forEach'](function (_0x11a6f3) {
    for (var _0x429896 = 0x0; _0x429896 < _0x11a6f3['length']; _0x429896++) {
        for (var _0x55d07c = 0x0; _0x55d07c < _0x11a6f3['length']; _0x55d07c++) {
            obj[_0x11a6f3[_0x429896]][_0x11a6f3[_0x55d07c]]++;
        }
    }
});
var ans = [];
for (var k in obj) {
    for (var K in obj) {
        obj[K][k] = 0x0;
        if (obj[k][K] >= f) {
            ans['push']([
                k,
                K
            ]['sort']()['join']('\x20'));
        }
    }
}
ans['sort']();
console['log'](ans['length']);
if (ans['length'] != 0x0)
    console['log'](ans['join']('\x0a'));