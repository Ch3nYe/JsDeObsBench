var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a')['map'](Number);
while (!![]) {
    var n = arr['shift']();
    if (n == 0x0)
        break;
    if (n == 0x1) {
        console['log']('');
        continue;
    }
    var ary = [];
    for (var i = 0x0; i < n; i++)
        ary[i] = ![];
    for (var i = 0x1; i < n; i++) {
        ary[i * i % n] = !![];
    }
    var m = [];
    ary['forEach'](function (_0x5d8cec, _0x7abc7c) {
        if (_0x5d8cec)
            m['push'](_0x7abc7c);
    });
    var ans = [];
    var len = (n - 0x1) / 0x2;
    for (var i = 0x0; i <= len; i++)
        ans[i] = 0x0;
    for (var i = 0x0; i < m['length']; i++) {
        for (var j = i + 0x1; j < m['length']; j++) {
            var x = m[i] - m[j];
            if (x < 0x0)
                x += n;
            if (len < x)
                x = n - x;
            ans[x] += 0x2;
        }
    }
    ans['shift']();
    ans['forEach'](function (_0x2acdef) {
        console['log'](_0x2acdef);
    });
}