var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var s = input['trim']();
for (var i = 0x0; i < s['length'] - 0x7; i++) {
    var arr = [
        s[i],
        s[i + 0x1],
        s[i + 0x2],
        s[i + 0x3],
        s[i + 0x4],
        s[i + 0x5],
        s[i + 0x6],
        s[i + 0x7]
    ];
    if (arr['join']('') == 'AIZUNYAN') {
        i += 0x7;
        continue;
    }
    var str = arr['sort']()['join']('');
    if (str == 'AADINNUY') {
        s = s['slice'](0x0, i) + 'AIZUNYAN' + s['slice'](i + 0x8, s['length']);
        i += 0x7;
    }
}
console['log'](s);