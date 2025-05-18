const a0_0x3e0e16 = (function () {
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
    a0_0x3e0e16(this, function () {
        const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        const result = a0_0x58b489('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x58b489();
        }
    })();
}());
const findSet = p => {
    return x => {
        if (x != p[x])
            p[x] = findSet(p)(p[x]);
        return p[x];
    };
};
const link = (p, r) => {
    return (x, y) => {
        if (r[x] > r[y])
            p[y] = x;
        else {
            p[x] = y;
            if (r[x] === r[y])
                r[y]++;
        }
    };
};
const dsFactory = n => {
    this['p'] = [];
    this['r'] = [];
    for (let i = 0x0; i < n; i++) {
        this['p'][i] = i;
        this['r'][i] = 0x0;
    }
    this['findSet'] = findSet(this['p']);
    this['link'] = link(this['p'], this['r']);
    return {
        'same': (x, y) => this['findSet'](x) === this['findSet'](y),
        'unite': (x, y) => this['link'](this['findSet'](x), this['findSet'](y))
    };
};
const input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
const lines = input['split']('\x0a');
const [n, q] = lines['shift']()['split']('\x20')['map'](Number);
const ds = dsFactory(n);
lines['forEach'](x => {
    const [t, a, b] = x['split']('\x20')['map'](Number);
    switch (t) {
    case 0x0:
        ds['unite'](a, b);
        break;
    case 0x1:
        const ret = ds['same'](a, b) ? 0x1 : 0x0;
        console['log'](ret);
        break;
    }
});
function a0_0x58b489(ret) {
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