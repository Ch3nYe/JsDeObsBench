var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
var D = Arr['shift']() - 0x0;
var x = Arr['shift']() - 0x0;
var X = [];
for (var i = 0x0; i < x; i++) {
    var v = Arr['shift']()['split']('\x20');
    if (v[0x0] == 'D')
        X['push'](v[0x1] - 0x0);
}
X['sort'](function (_0x1be0e6, _0x300727) {
    return _0x300727 - _0x1be0e6;
});
var y = Arr['shift']() - 0x0;
var Y = [];
for (var i = 0x0; i < y; i++) {
    var v = Arr['shift']()['split']('\x20');
    if (v[0x0] == 'DD')
        Y['push'](v[0x1] - 0x0);
}
Y['sort'](function (_0x303d19, _0x5c9bbc) {
    return _0x5c9bbc - _0x303d19;
});
var max = 0x0;
for (var x = 0x0; x <= X['length']; x++) {
    for (var y = 0x0; y <= Y['length']; y++) {
        if (D < x + y * 0x2)
            break;
        var sum = 0x0;
        for (var i = 0x0; i < x; i++)
            sum += X[i];
        for (var i = 0x0; i < y; i++)
            sum += Y[i];
        max = Math['max'](max, sum);
    }
}
console['log'](max);