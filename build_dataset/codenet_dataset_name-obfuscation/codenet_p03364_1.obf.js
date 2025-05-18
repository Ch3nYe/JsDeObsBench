var lines = require('fs')['readFileSync']('/dev/stdin', 'utf8')['split']('\x0a');
var n = lines[0x0] | 0x0;
var s = lines['slice'](0x1);
function good(_0x480f49, _0x55cfa1) {
    for (var _0x55d393 = 0x0; _0x55d393 < n; ++_0x55d393) {
        for (var _0x4ae1f4 = 0x0; _0x4ae1f4 < n; ++_0x4ae1f4) {
            if (s[(_0x55d393 + _0x480f49) % n][(_0x4ae1f4 + _0x55cfa1) % n] !== s[(_0x4ae1f4 + _0x480f49) % n][(_0x55d393 + _0x55cfa1) % n])
                return 0x0;
        }
    }
    return 0x1;
}
var ans = 0x0;
for (var a = 0x0; a < n; ++a) {
    for (var b = 0x0; b < n; ++b) {
        ans += good(a, b);
    }
}
console['log'](ans);