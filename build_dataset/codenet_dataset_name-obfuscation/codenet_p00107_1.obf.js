var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    var arr = Arr['shift']()['split']('\x20')['map'](Number);
    if (arr[0x0] == 0x0 && arr[0x1] == 0x0 && arr[0x2] == 0x0)
        break;
    arr['sort'](function (_0xd1bfc, _0x3eaf09) {
        return _0xd1bfc - _0x3eaf09;
    });
    var R = Math['sqrt'](arr[0x0] * arr[0x0] + arr[0x1] * arr[0x1]);
    var n = Arr['shift']() - 0x0;
    for (var i = 0x0; i < n; i++) {
        var r = Arr['shift']() - 0x0;
        console['log'](r * 0x2 > R ? 'OK' : 'NA');
    }
}