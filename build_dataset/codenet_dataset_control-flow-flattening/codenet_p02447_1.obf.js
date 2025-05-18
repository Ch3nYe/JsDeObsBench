var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
var n = arr['shift']() - 0x0;
var a = [];
for (var i = 0x0; i < n; i++)
    a['push'](arr[i]['split']('\x20')['map'](Number));
a['sort'](function (a, b) {
    var JNdpmg = {
        'blGcw': function (x, y) {
            return x != y;
        },
        'adYej': function (x, y) {
            return x - y;
        },
        'YYbar': function (x, y) {
            return x - y;
        }
    };
    if (JNdpmg['blGcw'](a[0x0], b[0x0]))
        return JNdpmg['adYej'](a[0x0], b[0x0]);
    else
        return JNdpmg['YYbar'](a[0x1], b[0x1]);
});
console['log'](a['join']('\x0a')['replace'](/,/g, '\x20'));