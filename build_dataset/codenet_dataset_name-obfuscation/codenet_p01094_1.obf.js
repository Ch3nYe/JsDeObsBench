var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
var ans = '';
while (arr['shift']() != 0x0) {
    var a = arr['shift']()['split']('\x20');
    var obj = {};
    for (var i = 0x0; i < a['length']; i++) {
        obj[a[i]] = obj[a[i]] + 0x1 || 0x1;
        var s = [];
        for (var k in obj)
            s['push']([
                obj[k],
                k
            ]);
        s['sort'](function (_0x3a7ae2, _0x3beb1e) {
            return _0x3beb1e[0x0] - _0x3a7ae2[0x0];
        });
        if (s['length'] == 0x1)
            s[0x1] = [0x0];
        if (s[0x0][0x0] > s[0x1][0x0] + a['length'] - (i + 0x1)) {
            ans += s[0x0][0x1] + '\x20' + (i + 0x1) + '\x0a';
            break;
        }
    }
    if (i == a['length'])
        ans += 'TIE' + '\x0a';
}
console['log'](ans['trim']());