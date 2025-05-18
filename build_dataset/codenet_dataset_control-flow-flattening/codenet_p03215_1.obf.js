'use strict';
function _(s) {
    const bvXBaC = {
        'IejZi': function (x, y) {
            return x - y;
        }
    };
    let l = s['split']('\x0a');
    if (l[bvXBaC['IejZi'](l['length'], 0x1)] == '')
        l['pop']();
    this['l'] = l;
    this['y'] = 0x0;
}
_['prototype']['ints'] = function () {
    return this['l'][this['y']++]['split']('\x20')['map'](v => +v);
};
_['prototype']['intv'] = function () {
    const y = this['y'];
    this['y'] = this['l']['length'];
    return this['l']['slice'](y)['map'](v => +v);
};
_['prototype']['strv'] = function () {
    const y = this['y'];
    this['y'] = this['l']['length'];
    return this['l']['slice'](y);
};
_['prototype']['strn'] = function (n) {
    const fCansH = {
        'MlHCh': function (x, y) {
            return x + y;
        }
    };
    const y = this['y'];
    this['y'] += n;
    return this['l']['slice'](y, fCansH['MlHCh'](y, n));
};
const $ = new _(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
((() => {
    const AQttRb = {
        'iLWbf': function (x, y) {
            return x < y;
        },
        'qGWtx': function (x, y) {
            return x < y;
        },
        'YBIRn': function (x, y) {
            return x >= y;
        },
        'WBMoF': function (x, y) {
            return x >= y;
        }
    };
    const nk = $['ints']();
    const n = nk[0x0];
    const k = nk[0x1];
    const a = $['ints']();
    const rr = [];
    for (let i = 0x0; AQttRb['iLWbf'](i, n); i++) {
        let s = 0x0;
        for (let j = i; AQttRb['qGWtx'](j, n); j++) {
            s += a[j];
            rr['push'](s);
        }
    }
    rr['sort']((a, b) => b - a);
    let res = 0x0;
    for (let d = 0x29; AQttRb['YBIRn'](d, 0x0); d--) {
        let border = 0x1 << d;
        let num = rr['filter'](e => (e & res + border) === res + border)['length'];
        if (AQttRb['WBMoF'](num, k)) {
            res += border;
        }
    }
    console['log'](res);
})());