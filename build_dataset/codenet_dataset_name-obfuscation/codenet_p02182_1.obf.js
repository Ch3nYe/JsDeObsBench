var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
var [n, m] = arr['shift']()['split']('\x20')['map'](Number);
var cnt = 0x0;
for (var i = 0x0; i < n; i++) {
    var s = arr[i];
    var t = arr[i + n];
    for (var j = 0x0; j < m; j++) {
        if (s[j] != t[j])
            cnt++;
    }
}
console['log'](cnt);