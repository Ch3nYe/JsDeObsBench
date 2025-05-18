var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['replace'](/\n$/, '')['split']('\x0a');
while (!![]) {
    var n = Arr['shift']() - 0x0;
    if (n == 0x0)
        break;
    var arr = Arr['shift']()['split']('\x20')['map'](Number);
    var x = arr[0x0];
    var ans = [[x]];
    for (var i = 0x1; i < n; i++) {
        if (x + 0x1 == arr[i])
            ans[ans['length'] - 0x1]['push'](arr[i]);
        else
            ans['push']([arr[i]]);
        x = arr[i];
    }
    ans['forEach'](function (_0x2e03be, _0xee2454) {
        if (_0x2e03be['length'] !== 0x1)
            ans[_0xee2454] = _0x2e03be[0x0] + '-' + _0x2e03be[_0x2e03be['length'] - 0x1];
        else
            ans[_0xee2454] = _0x2e03be[0x0];
    });
    console['log'](ans['join']('\x20'));
}