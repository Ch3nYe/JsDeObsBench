var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
var [m, n] = arr['shift']()['split']('\x20')['map'](Number);
var a = arr['shift']()['split']('\x20');
if (m == 0x2) {
    var cnt = [
        0x0,
        0x0
    ];
    for (var i = 0x0; i < n; i++) {
        if (a[i] - 0x1 == i % 0x2)
            cnt[0x0]++;
        if (a[i] - 0x1 == (i + 0x1) % 0x2)
            cnt[0x1]++;
    }
    console['log'](Math['min'](...cnt));
} else {
    var cnt = 0x0;
    for (var i = 0x1; i < n; i++) {
        if (a[i - 0x1] == a[i]) {
            cnt++;
            i++;
        }
    }
    console['log'](cnt);
}