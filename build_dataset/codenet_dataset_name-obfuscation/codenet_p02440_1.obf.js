var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
var n = arr['shift']() - 0x0;
var a = arr['shift']()['split']('\x20')['map'](Number);
var q = arr['shift']() - 0x0;
var s = '';
for (var i = 0x0; i < q; i++) {
    var [c, b, e] = arr[i]['split']('\x20')['map'](Number);
    var m = a[b];
    if (c == 0x0) {
        for (var j = b; j < e; j++)
            m = Math['min'](m, a[j]);
    } else {
        for (var j = b; j < e; j++)
            m = Math['max'](m, a[j]);
    }
    s += m + '\x0a';
}
console['log'](s['trim']());