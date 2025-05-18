var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
while (!![]) {
    var n = arr['shift']() - 0x0;
    if (n == 0x0)
        break;
    var base = [
        '',
        '',
        '',
        '',
        ''
    ];
    for (var i = 0x0; i < n; i++) {
        var [d, p, q] = arr['shift']()['split']('\x20')['map'](Number);
        q--;
        if (d == 0x1) {
            var max = 0x0;
            for (var j = 0x0; j < p; j++)
                max = Math['max'](max, base[q + j]['length']);
            for (var j = 0x0; j < p; j++) {
                while (base[q + j]['length'] < max)
                    base[q + j] += '0';
                base[q + j] += '1';
            }
        } else if (d == 0x2) {
            for (var j = 0x0; j < p; j++)
                base[q] += '1';
        }
    }
    var max = 0x0;
    for (var i = 0x0; i < 0x5; i++)
        max = Math['max'](max, base[i]['length']);
    for (var i = 0x0; i < 0x5; i++) {
        while (base[i]['length'] < max)
            base[i] += '0';
    }
    var cnt = 0x0;
    for (var i = 0x0; i < max; i++) {
        var str = base['map'](_0x3f7442 => _0x3f7442[i])['join']('');
        str = str['replace']('11111', '')['replace'](/0/g, '');
        cnt += str['length'];
    }
    console['log'](cnt);
}