var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    var n = Arr['shift']() - 0x0;
    if (n == 0x0)
        break;
    var arr = [];
    for (var i = 0x0; i < n; i++) {
        var v = Arr['shift']() - 0x0;
        arr['push'](v);
    }
    arr['sort'](function (_0x1813b3, _0x3c8f25) {
        return _0x1813b3 - _0x3c8f25;
    });
    var wait = [];
    var time = 0x0;
    for (var i = 0x0; i < n; i++) {
        wait['push'](time);
        time += arr[i];
    }
    var sum = wait['reduce'](function (_0x33cd18, _0x193bb5) {
        return _0x33cd18 + _0x193bb5;
    });
    console['log'](sum);
}