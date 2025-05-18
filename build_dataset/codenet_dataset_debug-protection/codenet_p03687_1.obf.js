const a0_0x246e10 = (function () {
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
    a0_0x246e10(this, function () {
        const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        const result = a0_0xa504e9('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0xa504e9();
        }
    })();
}());
console['log']((args => {
    const S = args['trim']()['split']``['map'](c => c['charCodeAt']() - 0x61);
    const N = S['length'];
    const a = Array(0x1a)['fill'](-0x1);
    for (let i = 0x0; i < 0x1a; i++) {
        let d = 0x0;
        for (let j = 0x0; j < N; j++) {
            d = S[j] === i ? 0x0 : d + 0x1;
            if (a[i] < d)
                a[i] = d;
        }
    }
    return Math['min'](...a['filter'](v => v >= 0x0));
})(require('fs')['readFileSync']('/dev/stdin', 'utf8')));
function a0_0xa504e9(ret) {
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