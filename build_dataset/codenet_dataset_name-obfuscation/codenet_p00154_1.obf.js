function bomb(_0xb1870c, _0x36244e) {
    dp[_0xb1870c][_0x36244e]++;
    if (_0xb1870c == card['length'])
        return;
    var _0x146842 = card[_0xb1870c][0x0];
    var _0x5ed748 = card[_0xb1870c][0x1];
    for (var _0xd372ca = 0x0; _0xd372ca <= _0x5ed748; _0xd372ca++) {
        bomb(_0xb1870c + 0x1, _0x36244e + _0x146842 * _0xd372ca);
    }
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
while (!![]) {
    var m = arr['shift']() - 0x0;
    if (m == 0x0)
        break;
    var card = [];
    while (m--)
        card['push'](arr['shift']()['split']('\x20')['map'](Number));
    var g = arr['shift']() - 0x0;
    var dp = [];
    for (var i = 0x0; i <= card['length']; i++) {
        dp[i] = [];
        for (var j = 0x0; j <= 0x3e8; j++) {
            dp[i][j] = 0x0;
        }
    }
    bomb(0x0, 0x0);
    while (g--)
        console['log'](dp[card['length']][arr['shift']() - 0x0]);
}