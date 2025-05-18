function BFS() {
    var _0x52ecf6 = [[
            s0,
            0x0
        ]];
    while (!![]) {
        if (_0x52ecf6['length'] == 0x0)
            break;
        var [_0x1cf017, _0x8e3e64] = _0x52ecf6['shift']();
        if (_0x1cf017 == s1) {
            flag = !![];
            console['log'](_0x8e3e64);
            break;
        }
        ab['forEach'](_0x1147f4 => {
            if (_0x1cf017['includes'](_0x1147f4[0x0])) {
                var _0x47ed1c = new RegExp(_0x1147f4[0x0], 'g');
                var _0xdd344a = _0x1cf017['replace'](_0x47ed1c, _0x1147f4[0x1]);
                if (_0xdd344a['length'] <= 0xa)
                    _0x52ecf6['push']([
                        _0xdd344a,
                        _0x8e3e64 + 0x1
                    ]);
            }
        });
    }
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
while (!![]) {
    var n = arr['shift']() - 0x0;
    if (n == 0x0)
        break;
    var ab = arr['slice'](0x0, n)['map'](_0x1aa120 => _0x1aa120['split']('\x20'));
    ;
    arr = arr['slice'](n);
    var s0 = arr['shift']();
    var s1 = arr['shift']();
    var flag = ![];
    BFS();
    if (!flag)
        console['log'](-0x1);
}