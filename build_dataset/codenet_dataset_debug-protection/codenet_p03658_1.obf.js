const a0_0x53ce65 = (function () {
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
    a0_0x53ce65(this, function () {
        const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        const result = a0_0x29c52b('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x29c52b();
        }
    })();
}());
'use strict';
const Main = input => {
    let xs = input['trim']()['split']('\x0a');
    let N = Number(xs[0x0]['split']('\x20')[0x0]);
    let K = Number(xs[0x0]['split']('\x20')[0x1]);
    let l = [];
    for (let i = 0x0; i < N; i++) {
        l['push'](xs[0x1]['split']('\x20')[i]);
    }
    const compare = (b, a) => {
        return a - b;
    };
    l['sort'](compare);
    let ans = 0x0;
    for (let i = 0x0; i < K; i++) {
        ans += Number(l[i]);
    }
    console['log'](ans);
};
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function a0_0x29c52b(ret) {
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