var lines = [];
var readline = require('readline');
var rl = readline['createInterface']({
    'input': process['stdin'],
    'output': process['stdout']
});
rl['on']('line', function (x) {
    lines['push'](x);
});
rl['on']('close', function () {
    var oAkiMC = {
        'IYVYn': '1|2|4|5|3|0',
        'ZqJRW': function (x, y) {
            return x < y;
        },
        'gVyhh': function (callee, param1) {
            return callee(param1);
        },
        'MuOYM': function (x, y) {
            return x <= y;
        },
        'mbQMl': function (x, y) {
            return x - y;
        }
    };
    var qmVkVY = oAkiMC['IYVYn']['split']('|');
    var ZOZuPC = 0x0;
    while (!![]) {
        switch (qmVkVY[ZOZuPC++]) {
        case '0':
            for (var i = 0x0; oAkiMC['ZqJRW'](i, ans['length']); i++) {
                console['log'](ans[i]);
            }
            continue;
        case '1':
            var A = oAkiMC['gVyhh'](Number, lines[0x0]['split']('\x20')[0x0]);
            continue;
        case '2':
            var B = oAkiMC['gVyhh'](Number, lines[0x0]['split']('\x20')[0x1]);
            continue;
        case '3':
            for (var i = A; oAkiMC['MuOYM'](i, B); i++) {
                if (i < A + K) {
                    ans += i['toString']();
                } else if (i > oAkiMC['mbQMl'](B, K)) {
                    ans += i['toString']();
                }
            }
            continue;
        case '4':
            var K = Number(lines[0x0]['split']('\x20')[0x2]);
            continue;
        case '5':
            var ans = '';
            continue;
        }
        break;
    }
});