var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var lines = input['trim']()['split'](/\n/g);
var n = +lines[0x0]['split']('\x20')[0x0];
var m = +lines[0x0]['split']('\x20')[0x1];
var A = lines['slice'](0x1, m);
var b = lines['slice'](m, m + m);
var ans;
for (var i = 0x0; i < n; i++) {
    ans = 0x0;
    for (var j = 0x0; j < m; j++) {
        ans += A[i]['split']('\x20')[j] * b[j];
    }
    console['log'](ans);
}