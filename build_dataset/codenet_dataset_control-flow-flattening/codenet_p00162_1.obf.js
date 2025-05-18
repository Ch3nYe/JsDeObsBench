function hamming() {
    var WHHoqp = {
        'NAZEJ': function (x, y) {
            return x == y;
        },
        'uFkZz': function (x, y) {
            return x % y;
        },
        'LLkyP': function (x, y) {
            return x == y;
        },
        'EUNvZ': function (x, y) {
            return x % y;
        },
        'fPzvO': function (x, y) {
            return x == y;
        },
        'UBPQr': function (x, y) {
            return x == y;
        },
        'uffGr': function (x, y) {
            return x % y;
        }
    };
    var obj = {};
    for (var i = 0x1; i <= 0xf4240; i++) {
        var KYXPXW = '4|3|1|0|2'['split']('|');
        var Woqaxo = 0x0;
        while (!![]) {
            switch (KYXPXW[Woqaxo++]) {
            case '0':
                while (WHHoqp['NAZEJ'](WHHoqp['uFkZz'](h, 0x5), 0x0))
                    h /= 0x5;
                continue;
            case '1':
                while (WHHoqp['LLkyP'](WHHoqp['EUNvZ'](h, 0x3), 0x0))
                    h /= 0x3;
                continue;
            case '2':
                if (WHHoqp['fPzvO'](h, 0x1))
                    obj[i] = !![];
                continue;
            case '3':
                while (WHHoqp['UBPQr'](WHHoqp['uffGr'](h, 0x2), 0x0))
                    h /= 0x2;
                continue;
            case '4':
                var h = i;
                continue;
            }
            break;
        }
    }
    return obj;
}
var Numbers = hamming();
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['replace'](/\n$/, '')['split']('\x0a');
while (!![]) {
    var mn = Arr['shift']()['split']('\x20')['map'](Number);
    if (mn[0x0] == 0x0)
        break;
    var cnt = 0x0;
    for (var i = mn[0x0]; i <= mn[0x1]; i++) {
        if (Numbers[i])
            cnt++;
    }
    console['log'](cnt);
}