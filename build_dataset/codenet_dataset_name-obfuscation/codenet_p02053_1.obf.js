var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
var [h, w] = arr['shift']()['split']('\x20')['map'](Number);
var b = [];
for (var i = 0x0; i < h; i++) {
    var two = [];
    arr[i]['split']('')['forEach']((_0x5003be, _0x32f43f) => {
        if (_0x5003be == 'B')
            two['push']([
                i,
                _0x32f43f
            ]);
    });
    if (two['length'] == 0x1)
        b['push'](two[0x0]);
    else if (two['length'] >= 0x2)
        b['push'](two[0x0], two[two['length'] - 0x1]);
}
var max = 0x0;
for (var i = 0x0; i < b['length']; i++) {
    for (var j = i + 0x1; j < b['length']; j++) {
        var d = Math['abs'](b[i][0x0] - b[j][0x0]) + Math['abs'](b[i][0x1] - b[j][0x1]);
        max = Math['max'](max, d);
    }
}
console['log'](max);