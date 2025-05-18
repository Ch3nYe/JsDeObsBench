function bomb(_0x58953c) {
    var _0x33ceeb = obj[_0x58953c];
    M['forEach'](function (_0x9a2c2b) {
        if (_0x58953c == _0x9a2c2b[0x0]) {
            var _0x3a1cf0 = 0x0;
            _0x9a2c2b[0x1]['forEach'](function (_0x4223d9) {
                _0x3a1cf0 += bomb(_0x4223d9);
            });
            _0x33ceeb = Math['min'](_0x33ceeb, _0x3a1cf0);
        }
    });
    return _0x33ceeb;
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
while (!![]) {
    var n = arr['shift']() - 0x0;
    if (n == 0x0)
        break;
    var obj = {};
    for (var i = 0x0; i < n; i++) {
        var data = arr['shift']()['split']('\x20');
        obj[data[0x0]] = data[0x1] - 0x0;
    }
    var m = arr['shift']() - 0x0;
    var M = [];
    for (var i = 0x0; i < m; i++) {
        var data = arr['shift']()['split']('\x20');
        var name = data['shift']();
        data['shift']();
        M['push']([
            name,
            data
        ]);
    }
    var item = arr['shift']();
    console['log'](bomb(item));
}