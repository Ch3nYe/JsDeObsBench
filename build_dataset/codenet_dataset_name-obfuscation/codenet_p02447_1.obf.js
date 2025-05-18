var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
var n = arr['shift']() - 0x0;
var a = [];
for (var i = 0x0; i < n; i++)
    a['push'](arr[i]['split']('\x20')['map'](Number));
a['sort'](function (_0x26f279, _0x160f19) {
    if (_0x26f279[0x0] != _0x160f19[0x0])
        return _0x26f279[0x0] - _0x160f19[0x0];
    else
        return _0x26f279[0x1] - _0x160f19[0x1];
});
console['log'](a['join']('\x0a')['replace'](/,/g, '\x20'));