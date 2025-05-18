var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
var abc = [];
for (var i = 0x0; i < Arr['length']; i++) {
    if (abc['length'] == 0x0 && Arr[i] == '0\x200')
        break;
    if (abc['length'] == 0x4) {
        var max = abc['reduce'](function (_0x14b8b7, _0x530a03) {
            return Math['max'](_0x14b8b7, _0x530a03);
        });
        var ABC = 'ABCD'['split']('');
        var str = ABC[abc['indexOf'](max)];
        console['log'](str + '\x20' + max);
        abc = [];
    } else {
        var arr = Arr[i]['split']('\x20')['map'](Number);
        abc['push'](arr[0x0] + arr[0x1]);
    }
}