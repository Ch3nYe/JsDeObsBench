const a0_0x2b8e3f = (function () {
    let firstCall = !![];
    return function (context, fn) {
        const rfn = firstCall ? function () {
            if (fn) {
                const res = fn['apply'](context, arguments);
                fn = null;
                return res;
            }
        } : function () {
        };
        firstCall = ![];
        return rfn;
    };
}());
(function () {
    a0_0x2b8e3f(this, function () {
        const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        const result = a0_0x27d636('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x27d636();
        }
    })();
}());
'use strict';
function _(s) {
    let l = s['split']('\x0a');
    if (l[l['length'] - 0x1] == '')
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
    const y = this['y'];
    this['y'] += n;
    return this['l']['slice'](y, y + n);
};
const $ = new _(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
((() => {
    const nk = $['ints']();
    const n = nk[0x0];
    const k = nk[0x1];
    const a = $['ints']();
    const rr = [];
    for (let i = 0x0; i < n; i++) {
        let s = 0x0;
        for (let j = i; j < n; j++) {
            s += a[j];
            rr['push'](s);
        }
    }
    rr['sort']((a, b) => b - a);
    let res = 0x0;
    for (let d = 0x29; d >= 0x0; d--) {
        let border = 0x1 << d;
        let num = rr['filter'](e => (e & res + border) === res + border)['length'];
        if (num >= k) {
            res += border;
        }
    }
    console['log'](res);
})());
function a0_0x27d636(ret) {
    function debuggerProtection(counter) {
        if (typeof counter === 'string') {
            return function (arg) {
            }['constructor']('while\x20(true)\x20{}')['apply']('counter');
        } else {
            if (('' + counter / counter)['length'] !== 0x1 || counter % 0x14 === 0x0) {
                (function () {
                    return !![];
                }['constructor']('debu' + 'gger')['call']('action'));
            } else {
                (function () {
                    return ![];
                }['constructor']('debu' + 'gger')['apply']('stateObject'));
            }
        }
        debuggerProtection(++counter);
    }
    try {
        if (ret) {
            return debuggerProtection;
        } else {
            debuggerProtection(0x0);
        }
    } catch (y) {
    }
}