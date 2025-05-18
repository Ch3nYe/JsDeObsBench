var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
var abc = [];
for (var i = 0x0; i < Arr['length']; i++) {
    if (abc['length'] == 0x0 && Arr[i] == '0\x200')
        break;
    if (abc['length'] == 0x4) {
        var crshAd = '3|0|1|4|2'['split']('|');
        var wTFGJW = 0x0;
        while (!![]) {
            switch (crshAd[wTFGJW++]) {
            case '0':
                var ABC = 'ABCD'['split']('');
                continue;
            case '1':
                var str = ABC[abc['indexOf'](max)];
                continue;
            case '2':
                abc = [];
                continue;
            case '3':
                var max = abc['reduce'](function (a, b) {
                    return Math['max'](a, b);
                });
                continue;
            case '4':
                console['log'](str + '\x20' + max);
                continue;
            }
            break;
        }
    } else {
        var arr = Arr[i]['split']('\x20')['map'](Number);
        abc['push'](arr[0x0] + arr[0x1]);
    }
}