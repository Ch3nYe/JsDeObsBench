const main = inputs => {
    var GetJXT = {
        'aEUux': '2|1|5|0|4|3',
        'ohnox': function (callee, param1) {
            return callee(param1);
        },
        'mOVFx': function (x, y) {
            return x * y;
        },
        'qSTuU': function (x, y) {
            return x + y;
        }
    };
    var QSVVka = GetJXT['aEUux']['split']('|');
    var nOhTYU = 0x0;
    while (!![]) {
        switch (QSVVka[nOhTYU++]) {
        case '0':
            var count = 0x0;
            continue;
        case '1':
            var X = GetJXT['ohnox'](Number, array);
            continue;
        case '2':
            var array = inputs[0x0]['split']('\x20');
            continue;
        case '3':
            console['log'](count);
            continue;
        case '4':
            while (0x1) {
                var risoku = Math['floor'](GetJXT['mOVFx'](num, 0.01));
                num = GetJXT['qSTuU'](num, risoku);
                count++;
                if (X <= num)
                    break;
            }
            continue;
        case '5':
            var num = 0x64;
            continue;
        }
        break;
    }
};
main(require('fs')['readFileSync']('/dev/stdin', 'UTF-8')['trim']()['split']('\x0a'));