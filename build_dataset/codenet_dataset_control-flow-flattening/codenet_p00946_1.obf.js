var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
var n = arr['shift']()['split']('\x20')[0x0] - 0x0;
var x = [];
for (var i = 0x1; i <= n; i++)
    x['push']([
        i,
        -0x1 * i
    ]);
arr['forEach'](function (v, i) {
    var nlBaFy = {
        'hWAbK': function (x, y) {
            return x - y;
        }
    };
    x[nlBaFy['hWAbK'](nlBaFy['hWAbK'](v, 0x0), 0x1)][0x1] = i;
});
x['sort'](function (a, b) {
    var XzmVqy = {
        'KVBjj': function (x, y) {
            return x - y;
        }
    };
    return XzmVqy['KVBjj'](b[0x1], a[0x1]);
});
x = x['map'](function (v) {
    return v[0x0];
});
console['log'](x['join']('\x0a'));