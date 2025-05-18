const a0_0x30b597 = (function () {
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
    a0_0x30b597(this, function () {
        const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        const result = a0_0x22ab77('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x22ab77();
        }
    })();
}());
console['log']((args => {
    const s = args['trim']();
    const L = s['length'];
    const p = Array(L)['fill'](0x0);
    for (let i = L; --i;)
        p[i - 0x1] = p[i] + (s[i] === 'p');
    let g = 0x0, w = 0x0;
    for (let i = 0x0; i < L; i++) {
        if (s[i] === 'g') {
            if (g > p[i]) {
                g--;
                w++;
            } else
                g++;
        } else
            g--;
    }
    return '' + w;
})(require('fs')['readFileSync']('/dev/stdin', 'utf8')));
function a0_0x22ab77(ret) {
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