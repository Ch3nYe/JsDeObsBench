var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
for (var i = 0x0; i < Arr['length']; i++) {
    var arr = Arr[i]['split'](',')['map'](Number);
    (function (x1, y1, x2, y2, xq, yq) {
        var akefQv = {
            'zZvjo': function (x, y) {
                return x == y;
            },
            'Ddgtr': function (x, y) {
                return x - y;
            },
            'pvQhG': function (x, y) {
                return x - y;
            },
            'ZVpgN': '5|6|2|0|1|3|7|4',
            'mSTYq': function (x, y) {
                return x - y;
            },
            'aVTeg': function (x, y) {
                return x * y;
            },
            'BtPny': function (x, y) {
                return x / y;
            },
            'AJmMA': function (x, y) {
                return x - y;
            },
            'cLtKF': function (x, y) {
                return x - y;
            },
            'ETlWZ': function (x, y) {
                return x / y;
            },
            'LdgcW': function (x, y) {
                return x - y;
            },
            'BBKlF': function (x, y) {
                return x + y;
            },
            'QkFYY': function (x, y) {
                return x + y;
            }
        };
        var k = akefQv['zZvjo'](akefQv['Ddgtr'](x2, x1), 0x0) ? Infinity : akefQv['Ddgtr'](y2, y1) / (x2 - x1);
        var ans;
        if (akefQv['zZvjo'](k, 0x0))
            ans = [
                xq,
                akefQv['pvQhG'](y1, akefQv['pvQhG'](yq, y1))
            ];
        else if (akefQv['zZvjo'](k, Infinity))
            ans = [
                akefQv['pvQhG'](x1, xq - x1),
                yq
            ];
        else {
            var okiSfy = akefQv['ZVpgN']['split']('|');
            var BTuuKj = 0x0;
            while (!![]) {
                switch (okiSfy[BTuuKj++]) {
                case '0':
                    var b2 = akefQv['mSTYq'](yq, akefQv['aVTeg'](a2, xq));
                    continue;
                case '1':
                    var xm = akefQv['BtPny'](akefQv['AJmMA'](b2, b1), a1 - a2);
                    continue;
                case '2':
                    var b1 = akefQv['cLtKF'](y1, akefQv['aVTeg'](a1, x1));
                    continue;
                case '3':
                    var x = akefQv['aVTeg'](0x2, xm) - xq;
                    continue;
                case '4':
                    ans = [
                        x,
                        y
                    ];
                    continue;
                case '5':
                    var a1 = akefQv['ETlWZ'](akefQv['LdgcW'](y2, y1), x2 - x1);
                    continue;
                case '6':
                    var a2 = akefQv['BtPny'](-0x1, a1);
                    continue;
                case '7':
                    var y = akefQv['BBKlF'](akefQv['aVTeg'](a2, x), b2);
                    continue;
                }
                break;
            }
        }
        console['log'](akefQv['QkFYY'](ans[0x0]['toFixed'](0x6) + '\x20', ans[0x1]['toFixed'](0x6)));
    }['apply'](null, arr));
}