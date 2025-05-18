var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
while (!![]) {
    var n = arr['shift']() - 0x0;
    if (n == 0x0)
        break;
    var ary = arr['slice'](0x0, n);
    ary = ary['map'](_0x45d72b => _0x45d72b['split']('\x20')['map'](Number)['slice'](0x1));
    var flag = !![];
    var h = [];
    for (var i = 0x0; i < n; i++)
        h['push']([i]);
    for (var i = 0x1; i <= 0x1e; i++) {
        var a = [];
        ary['forEach']((_0x492c4e, _0x3a49e9) => {
            if (_0x492c4e['includes'](i))
                a['push'](_0x3a49e9);
        });
        var b = [];
        a['forEach'](_0x18ad87 => b['push'](...h[_0x18ad87]));
        b = b['filter']((_0x25bac2, _0x33cdd4, _0xc19bc7) => _0xc19bc7['indexOf'](_0x25bac2) == _0x33cdd4);
        if (b['length'] == n) {
            flag = ![];
            console['log'](i);
            break;
        }
        a['forEach'](_0x14dc75 => h[_0x14dc75] = b);
    }
    if (flag)
        console['log'](-0x1);
    arr = arr['slice'](n);
}