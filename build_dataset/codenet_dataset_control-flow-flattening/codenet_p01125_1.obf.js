var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    var a = Arr['shift']();
    if (a == '0')
        break;
    var xy = [];
    for (var i = 0x0; i < a; i++)
        xy['push'](Arr['shift']());
    var b = Arr['shift']();
    var news = [];
    for (var i = 0x0; i < b; i++)
        news['push'](Arr['shift']());
    var X = 0xa;
    var Y = 0xa;
    var XY = [];
    news['forEach'](function (v) {
        var MVZGBJ = {
            'PINWT': function (x, y) {
                return x < y;
            },
            'qkZJa': function (x, y) {
                return x - y;
            },
            'jhydE': '1|0|4|2|3',
            'QrACu': function (x, y) {
                return x == y;
            },
            'zYuln': function (x, y) {
                return x == y;
            },
            'yLMJO': function (x, y) {
                return x == y;
            },
            'WMBhj': function (x, y) {
                return x + y;
            },
            'dqHIn': function (x, y) {
                return x + y;
            },
            'UusTW': function (x, y) {
                return x == y;
            }
        };
        var arr = v['split']('\x20');
        for (var i = 0x0; MVZGBJ['PINWT'](i, MVZGBJ['qkZJa'](arr[0x1], 0x0)); i++) {
            var mhWUWP = MVZGBJ['jhydE']['split']('|');
            var VYdYxJ = 0x0;
            while (!![]) {
                switch (mhWUWP[VYdYxJ++]) {
                case '0':
                    if (MVZGBJ['QrACu'](arr[0x0], 'E'))
                        X++;
                    continue;
                case '1':
                    if (MVZGBJ['zYuln'](arr[0x0], 'N'))
                        Y++;
                    continue;
                case '2':
                    if (MVZGBJ['yLMJO'](arr[0x0], 'S'))
                        Y--;
                    continue;
                case '3':
                    XY['push'](MVZGBJ['WMBhj'](MVZGBJ['dqHIn'](X, '\x20'), Y));
                    continue;
                case '4':
                    if (MVZGBJ['UusTW'](arr[0x0], 'W'))
                        X--;
                    continue;
                }
                break;
            }
        }
    });
    var flag = xy['every'](function (v) {
        var hucfdb = {
            'UlnCl': function (x, y) {
                return x != y;
            }
        };
        return hucfdb['UlnCl'](XY['indexOf'](v), -0x1);
    });
    console['log'](flag ? 'Yes' : 'No');
}