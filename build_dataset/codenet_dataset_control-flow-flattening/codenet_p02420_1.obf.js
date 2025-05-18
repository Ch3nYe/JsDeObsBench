'use strict';
(function (stdin) {
    var uLQRye = {
        'tUZwG': '0|1|3|2|4',
        'zxpdp': function (x, y) {
            return x + y;
        }
    };
    var KCvKBK = uLQRye['tUZwG']['split']('|');
    var uPlfpp = 0x0;
    while (!![]) {
        switch (KCvKBK[uPlfpp++]) {
        case '0':
            var qCccdU = {
                'FanyV': function (x, y) {
                    return uLQRye['zxpdp'](x, y);
                }
            };
            continue;
        case '1':
            var lines = stdin['toString']();
            continue;
        case '2':
            var result = function (data) {
                return data['map'](function (v) {
                    var Bwtuct = {
                        'QAIbE': function (x, y) {
                            return qCccdU['FanyV'](x, y);
                        }
                    };
                    return v['slice'](-v[0x1])['map'](Number)['reduce'](function (str, num) {
                        return Bwtuct['QAIbE'](str['slice'](num), str['slice'](0x0, num));
                    }, v[0x0]);
                })['join']('\x0a');
            }(lines['match'](re)['map'](function (v) {
                return v['trim']()['split']('\x0a');
            }));
            continue;
        case '3':
            var re = /[A-Za-z]+\n([1-9][0-9]*\n)+/g;
            continue;
        case '4':
            console['log'](result);
            continue;
        }
        break;
    }
}(require('fs')['readFileSync']('/dev/stdin', 'utf8')));