function Main(input) {
    const DIwVXw = {
        'ixWsM': function (x, y) {
            return x < y;
        },
        'uFkXU': function (x, y) {
            return x == y;
        },
        'rHifR': function (x, y) {
            return x + y;
        },
        'JOONG': function (x, y) {
            return x < y;
        },
        'zDrZK': function (x, y) {
            return x % y;
        }
    };
    input = input['split']('\x0a');
    const s = input[0x0];
    const t = input[0x1];
    const match = [];
    for (i = 0x0; DIwVXw['ixWsM'](i, s['length']); i++) {
        if (DIwVXw['uFkXU']((s + t)['slice'](i, DIwVXw['rHifR'](i, t['length'])), t)) {
            match['push'](!![]);
        } else {
            match['push'](![]);
        }
    }
    max = 0x0;
    for (i = 0x0; DIwVXw['JOONG'](i, s['length']); i++) {
        isInf = ![];
        now = i;
        getted = [];
        while (match[now]) {
            getted['push'](now);
            now = DIwVXw['zDrZK'](now + t['length'], s['length']);
            if (getted['indexOf'](now) != -0x1) {
                isInf = !![];
                break;
            }
        }
        if (isInf) {
            max = -0x1;
            break;
        } else {
            if (DIwVXw['JOONG'](max, getted['length']))
                max = getted['length'];
        }
    }
    console['log'](max);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));