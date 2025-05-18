function Main(input) {
    const YtdIJr = {
        'FONxW': function (x, y) {
            return x === y;
        },
        'mrWNw': function (x, y) {
            return x - y;
        },
        'MorNH': function (x, y) {
            return x - y;
        },
        'SyuHZ': function (x, y) {
            return x > y;
        },
        'zhhQK': function (x, y) {
            return x <= y;
        },
        'FjNvl': function (x, y) {
            return x < y;
        },
        'XWzam': function (x, y) {
            return x === y;
        },
        'aKduR': function (x, y) {
            return x + y;
        },
        'AZsRr': function (x, y) {
            return x - y;
        },
        'cTzpC': function (x, y) {
            return x + y;
        },
        'SqdQJ': function (x, y) {
            return x === y;
        },
        'iAFcN': function (x, y) {
            return x - y;
        }
    };
    input = input['split']('\x0a');
    if (YtdIJr['FONxW'](input[YtdIJr['mrWNw'](input['length'], 0x1)], '')) {
        input['pop']();
    }
    const N = YtdIJr['MorNH'](input[0x0]['split']('\x20')[0x0], 0x0);
    const M = YtdIJr['mrWNw'](input[0x0]['split']('\x20')[0x1], 0x0);
    const S = input[0x1];
    var cur = S['length'] - 0x1;
    var ret = [];
    while (YtdIJr['SyuHZ'](cur, 0x0)) {
        if (YtdIJr['zhhQK'](cur, M)) {
            ret['unshift'](cur);
            break;
        }
        for (var i = 0x0; YtdIJr['FjNvl'](i, M); i++) {
            if (YtdIJr['XWzam'](S[YtdIJr['aKduR'](YtdIJr['AZsRr'](cur, M), i)], '0')) {
                ret['unshift'](YtdIJr['mrWNw'](M, i));
                cur = YtdIJr['cTzpC'](YtdIJr['AZsRr'](cur, M), i);
                break;
            }
            if (YtdIJr['SqdQJ'](i, YtdIJr['iAFcN'](M, 0x1))) {
                console['log'](-0x1);
                return;
            }
        }
    }
    console['log'](ret['join']('\x20'));
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));