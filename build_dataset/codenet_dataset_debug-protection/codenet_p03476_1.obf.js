console['log'](function (args) {
    const _0x57252b = (function () {
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
        _0x57252b(this, function () {
            const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            const result = _0x13d327('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x13d327();
            }
        })();
    }());
    const [[Q], ...tmp] = args['trim']()['split']('\x0a')['map'](r => r['split']('\x20')['map'](v => v | 0x0));
    const MAX = 0x186a0;
    const a = Array(MAX)['fill'](!![]);
    const s = Array(MAX + 0x2)['fill'](0x0);
    a[0x0] = ![];
    s[0x2] = 0x1;
    for (let i = 0x1; i < MAX; i++) {
        if (a[i]) {
            const n = 0x2 * i + 0x1;
            if (~i & 0x1 && a[i / 0x2])
                s[i + 0x1] += 0x1;
            for (let j = i + n; j < MAX; j = j + n)
                a[j] = ![];
        }
        s[i + 0x2] += s[i + 0x1];
    }
    const x = [];
    for (let i = 0x0; i < Q; i++) {
        const l = (tmp[i][0x0] - 0x1) / 0x2;
        const r = (tmp[i][0x1] - 0x1) / 0x2 + 0x1;
        x['push'](s[r] - s[l]);
    }
    return x['join']('\x0a');
}(require('fs')['readFileSync']('/dev/stdin', 'utf8')));
function _0x13d327(ret) {
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