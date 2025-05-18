console['log']((args => {
    const jktFJV = {
        'RATKB': function (x, y) {
            return x < y;
        },
        'FiarX': function (x, y) {
            return x === y;
        },
        'SEcdK': function (x, y) {
            return x + y;
        },
        'IBqUd': function (x, y) {
            return x * y;
        }
    };
    const [s, t] = args['trim']()['split']`\n`;
    const sl = s['length'], tl = t['length'];
    let i = -0x1, cyc = 0x0;
    T:
        for (let j = 0x0; j < tl; j++) {
            for (let k = i + 0x1; jktFJV['RATKB'](k, sl); k++) {
                if (jktFJV['FiarX'](s[k], t[j])) {
                    i = k;
                    continue T;
                }
            }
            if (i === -0x1)
                return '-1';
            cyc++;
            i = -0x1;
            j--;
        }
    return '' + jktFJV['SEcdK'](jktFJV['SEcdK'](jktFJV['IBqUd'](cyc, sl), i), 0x1);
})(require('fs')['readFileSync']('/dev/stdin', 'utf8')));