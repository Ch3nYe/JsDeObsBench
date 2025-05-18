'use strict';
function I(s, f) {
    const KYxCBd = {
        'HqiCW': function (x, y) {
            return x || y;
        }
    };
    this['_s'] = s['split']('\x0a');
    this['_c'] = 0x0;
    this['_l'] = 0x0;
    this['_f'] = KYxCBd['HqiCW'](f, Number);
}
I['prototype']['a'] = function () {
    var l = this['_s'][this['_l']];
    if (!l)
        return;
    var t = l['trim']()['split']('\x20');
    var a = t[this['_c']];
    this['_c']++;
    if (t['length'] === this['_c']) {
        this['_c'] = 0x0;
        this['_l']++;
    }
    return this['_f'](a);
};
I['prototype']['l'] = function () {
    const hTlerB = '4|3|0|2|1'['split']('|');
    let yVvtqB = 0x0;
    while (!![]) {
        switch (hTlerB[yVvtqB++]) {
        case '0':
            this['_c'] = 0x0;
            continue;
        case '1':
            return l['split']('\x20')['map'](this['_f']);
        case '2':
            this['_l']++;
            continue;
        case '3':
            if (!l)
                return;
            continue;
        case '4':
            var l = this['_s'][this['_l']];
            continue;
        }
        break;
    }
};
module['exports'] = I;
function main(input) {
    const HkhWOP = {
        'HPyWy': function (x, y) {
            return x <= y;
        },
        'uSRKT': function (x, y) {
            return x === y;
        },
        'GPhSK': function (x, y) {
            return x !== y;
        },
        'gjOIT': function (x, y) {
            return x % y;
        },
        'OtvPo': function (x, y) {
            return x && y;
        },
        'AqJkr': 'Yes'
    };
    const o = new I(input);
    const N = o['a']();
    const M = o['a']();
    const adj = [];
    for (let i = 0x1; HkhWOP['HPyWy'](i, N); i++) {
        adj[i] = [];
    }
    for (let i = 0x0; i < M; i++) {
        let ai = o['a']();
        let bi = o['a']();
        adj[ai]['push'](bi);
        adj[bi]['push'](ai);
    }
    let flag1 = ![];
    let flag2 = !![];
    for (let i = 0x1; HkhWOP['HPyWy'](i, N); i++) {
        if (HkhWOP['uSRKT'](adj[i]['length'], 0x6)) {
            flag1 = !![];
        }
        if (HkhWOP['GPhSK'](HkhWOP['gjOIT'](adj[i]['length'], 0x2), 0x0)) {
            flag2 = ![];
        }
    }
    console['log'](HkhWOP['OtvPo'](flag1, flag2) ? HkhWOP['AqJkr'] : 'No');
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));