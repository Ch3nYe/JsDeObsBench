x = require('fs')['readFileSync']('/dev/stdin', 'utf8');
y = x['trim']()['split']('\x0a');
while (!![]) {
    if (y['length'] == 0x0)
        break;
    var z = y['shift']()['split']('\x20');
    var s = [];
    z['forEach'](function (v) {
        var AFyOEn = {
            'TMWrl': function (x, y) {
                return x - y;
            },
            'oKKkf': '4|0|2|5|1|3',
            'mNWUd': function (x, y) {
                return x == y;
            },
            'amAOU': function (x, y) {
                return x * y;
            },
            'zvaAx': function (x, y) {
                return x + y;
            },
            'ZWYoL': function (x, y) {
                return x / y;
            },
            'xGKQN': function (x, y) {
                return x == y;
            }
        };
        if (/\d/['test'](v)) {
            s['unshift'](AFyOEn['TMWrl'](v, 0x0));
        } else {
            var ufzoFK = AFyOEn['oKKkf']['split']('|');
            var pWAmlD = 0x0;
            while (!![]) {
                switch (ufzoFK[pWAmlD++]) {
                case '0':
                    b = s['shift']();
                    continue;
                case '1':
                    if (AFyOEn['mNWUd'](v, '*'))
                        s['unshift'](AFyOEn['amAOU'](b, a));
                    continue;
                case '2':
                    if (AFyOEn['mNWUd'](v, '+'))
                        s['unshift'](AFyOEn['zvaAx'](b, a));
                    continue;
                case '3':
                    if (AFyOEn['mNWUd'](v, '/'))
                        s['unshift'](AFyOEn['ZWYoL'](b, a));
                    continue;
                case '4':
                    a = s['shift']();
                    continue;
                case '5':
                    if (AFyOEn['xGKQN'](v, '-'))
                        s['unshift'](AFyOEn['TMWrl'](b, a));
                    continue;
                }
                break;
            }
        }
    });
    console['log'](s[0x0]['toFixed'](0x6));
}