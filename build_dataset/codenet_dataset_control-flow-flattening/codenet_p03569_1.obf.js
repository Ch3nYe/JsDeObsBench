console['log']((args => {
    const BraOIw = {
        'JQxjA': function (x, y) {
            return x - y;
        },
        'TxmpU': function (x, y) {
            return x < y;
        },
        'xrYuC': function (x, y) {
            return x !== y;
        },
        'gvcWS': function (x, y) {
            return x === y;
        },
        'KDQXf': function (x, y) {
            return x === y;
        }
    };
    const s = args['trim']();
    const N = BraOIw['JQxjA'](s['length'], 0x1);
    let x = 0x0;
    for (let i = 0x0, j = N; BraOIw['TxmpU'](i, j); i++, j--) {
        while (BraOIw['xrYuC'](s[i], s[j])) {
            if (BraOIw['gvcWS'](s[i], 'x'))
                x++, i++;
            else if (BraOIw['KDQXf'](s[j], 'x'))
                x++, j--;
            else
                return '-1';
        }
    }
    return '' + x;
})(require('fs')['readFileSync']('/dev/stdin', 'utf8')));