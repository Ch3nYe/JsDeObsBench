var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var data = input['trim']()['split']('\x0a');
while (!![]) {
    var str = data['shift']();
    if (str == '#')
        break;
    str = str['replace'](/\d/g, function (v) {
        return 'n'['repeat'](v - 0x0);
    });
    var arr = str['split']('/');
    arr = arr['map'](v => v['split'](''));
    var [a, b, c, d] = data['shift']()['split']('\x20')['map'](Number);
    arr[a - 0x1][b - 0x1] = 'n';
    arr[c - 0x1][d - 0x1] = 'b';
    arr = arr['map'](v => v['join'](''));
    str = arr['join']('/');
    str = str['replace'](/n+/g, function (v) {
        return v['length'];
    });
    console['log'](str);
}