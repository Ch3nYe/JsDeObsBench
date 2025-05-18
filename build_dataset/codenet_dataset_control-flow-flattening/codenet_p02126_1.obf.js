var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
var [n, m, c] = arr['shift']()['split']('\x20')['map'](Number);
var L = arr['shift']()['split']('\x20')['map'](Number);
var cw = arr['map'](v => v['split']('\x20')['map'](Number));
cw['sort'](function (a, b) {
    return b[0x1] - a[0x1];
});
var sum = 0x0;
for (var i = 0x0; i < cw['length']; i++) {
    if (m == 0x0)
        break;
    var max = L[cw[i][0x0] - 0x1];
    if (max > 0x0) {
        sum += cw[i][0x1];
        L[cw[i][0x0] - 0x1]--;
        m--;
    }
}
console['log'](sum);