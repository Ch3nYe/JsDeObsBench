var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['replace'](/\n$/, '')['split']('\x0a');
while (!![]) {
    var str = Arr['shift']();
    if (str == '0\x200')
        break;
    var arr = str['split']('\x20');
    var data = [0x0];
    if (arr[0x0] > 0x0)
        data = data['concat'](Arr['shift']()['split']('\x20')['map'](Number));
    if (arr[0x1] > 0x0)
        data = data['concat'](Arr['shift']()['split']('\x20')['map'](Number));
    data['sort'](function (_0x3e7944, _0x1b8645) {
        return _0x3e7944 - _0x1b8645;
    });
    var max = 0x0;
    data['reduce'](function (_0xede2a0, _0x24b484) {
        max = Math['max'](max, Math['abs'](_0xede2a0 - _0x24b484));
        return _0x24b484;
    });
    console['log'](max);
}