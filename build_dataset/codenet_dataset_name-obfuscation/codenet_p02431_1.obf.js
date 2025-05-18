var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
var Q = arr[0x0] - 0x0;
var a = [];
var s = '';
for (var i = 0x1; i <= Q; i++) {
    var q = arr[i]['split']('\x20');
    if (q[0x0] == '0')
        a['push'](q[0x1] - 0x0);
    else if (q[0x0] == '1')
        s += a[q[0x1]] - 0x0 + '\x0a';
    else
        a['pop']();
}
console['log'](s['trim']());