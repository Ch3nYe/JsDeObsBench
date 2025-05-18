var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var data = input['trim']()['split']('\x0a');
while (!![]) {
    var str = data['shift']();
    if (str == '#')
        break;
    str = str['replace'](/\d/g, function (_0xe3be1f) {
        return 'n'['repeat'](_0xe3be1f - 0x0);
    });
    var arr = str['split']('/');
    arr = arr['map'](_0x10f2bc => _0x10f2bc['split'](''));
    var [a, b, c, d] = data['shift']()['split']('\x20')['map'](Number);
    arr[a - 0x1][b - 0x1] = 'n';
    arr[c - 0x1][d - 0x1] = 'b';
    arr = arr['map'](_0x2b5dfe => _0x2b5dfe['join'](''));
    str = arr['join']('/');
    str = str['replace'](/n+/g, function (_0x439d9e) {
        return _0x439d9e['length'];
    });
    console['log'](str);
}