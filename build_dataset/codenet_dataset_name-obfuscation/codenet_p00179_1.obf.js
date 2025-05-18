function BFS(_0x445209) {
    var _0x8b29bd = {};
    var _0x51deb2 = [[
            _0x445209,
            0x0
        ]];
    _0x8b29bd[_0x445209] = !![];
    while (!![]) {
        if (_0x51deb2['length'] == 0x0) {
            ans = 'NA';
            break;
        }
        var _0x388c59 = _0x51deb2['shift']();
        var _0x5f52ad = _0x388c59[0x0];
        var _0x1b1e73 = _0x388c59[0x1];
        if (/^0+$|^1+$|^2+$/['test'](_0x5f52ad)) {
            ans = _0x1b1e73;
            break;
        }
        for (var _0xdab4bb = 0x0; _0xdab4bb < _0x5f52ad['length'] - 0x1; _0xdab4bb++) {
            if (_0x5f52ad[_0xdab4bb] == _0x5f52ad[_0xdab4bb + 0x1])
                continue;
            var _0x105fd5 = _0x5f52ad['split']('');
            var _0x4c3ed0 = 0x3 - +_0x105fd5[_0xdab4bb] - +_0x105fd5[_0xdab4bb + 0x1];
            _0x105fd5[_0xdab4bb] = _0x4c3ed0;
            _0x105fd5[_0xdab4bb + 0x1] = _0x4c3ed0;
            var _0x466054 = _0x105fd5['join']('');
            if (_0x8b29bd['hasOwnProperty'](_0x466054) == ![]) {
                _0x51deb2['push']([
                    _0x466054,
                    _0x1b1e73 + 0x1
                ]);
                _0x8b29bd[_0x466054] = !![];
            }
        }
    }
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    var rgb = Arr['shift']();
    if (rgb == '0')
        break;
    rgb = rgb['replace'](/r/g, '0')['replace'](/g/g, '1')['replace'](/b/g, '2');
    var ans;
    BFS(rgb);
    console['log'](ans);
}