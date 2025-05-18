var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
var n = arr['shift']() - 0x0;
var a = arr['shift']()['split']('\x20')['map'](Number);
var b = a['slice']()['sort']((x, y) => x - y);
var q = arr['shift']() - 0x0;
var xy = arr['map'](v => v['split']('\x20')['map'](Number)['map'](v => v - 0x1));
xy['unshift']([
    0x0,
    0x0
]);
var A = {};
var B = {};
for (var i = 0x0; i < a['length']; i++) {
    if (a[i] != b[i]) {
        A[i] = a[i];
        B[i] = b[i];
    }
}
var BB = '';
for (var k in B)
    BB += B[k];
var flag = ![];
for (var i = 0x0; i <= q; i++) {
    [A[xy[i][0x0]], A[xy[i][0x1]]] = [
        A[xy[i][0x1]],
        A[xy[i][0x0]]
    ];
    var AA = '';
    for (var k in A)
        AA += A[k];
    if (AA == BB) {
        flag = !![];
        break;
    }
}
if (Object['keys'](A)['length'] == 0x0)
    console['log'](0x0);
else if (flag)
    console['log'](i);
else
    console['log'](-0x1);