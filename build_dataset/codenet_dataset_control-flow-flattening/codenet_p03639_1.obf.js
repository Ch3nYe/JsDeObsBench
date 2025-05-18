console['log']((args => {
    const aexgQb = {
        'orHZb': function (x, y) {
            return x < y;
        },
        'noufD': function (x, y) {
            return x % y;
        },
        'JOrCy': function (x, y) {
            return x - y;
        },
        'IYYyM': function (x, y) {
            return x + y;
        },
        'tbvId': 'Yes'
    };
    const [[N], a] = args['trim']()['split']`\n`['map'](r => r['split']` `['map'](v => v | 0x0));
    let odd = 0x0, p4 = 0x0;
    for (let i = 0x0; aexgQb['orHZb'](i, N); i++) {
        odd += a[i] & 0x1;
        p4 += !aexgQb['noufD'](a[i], 0x4);
    }
    return aexgQb['JOrCy'](odd, aexgQb['IYYyM'](odd, p4) === N) <= p4 ? aexgQb['tbvId'] : 'No';
})(require('fs')['readFileSync']('/dev/stdin', 'utf8')));