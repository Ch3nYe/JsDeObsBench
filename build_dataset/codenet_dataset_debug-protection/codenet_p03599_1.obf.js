const a0_0x2e266e = (function () {
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
    a0_0x2e266e(this, function () {
        const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        const result = a0_0x26b8e1('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x26b8e1();
        }
    })();
}());
const input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
(input => {
    const [A, B, C, D, E, F] = input['trim']()['split']('\x20')['map'](Number);
    let W = {};
    let S = {};
    for (let i = 0x1; i < F; i++) {
        for (let j = 0x0; j < F; j++) {
            const s = A * i * 0x64 + j * B * 0x64;
            if (s > F)
                break;
            W[s] = 0x1;
        }
    }
    const p = F * E / 0x64;
    for (let i = 0x0; i < F; i++) {
        for (let j = 0x0; j < F; j++) {
            const s = C * i + D * j;
            if (s > p)
                break;
            S[s] = 0x1;
        }
    }
    let ans = [
        A * 0x64,
        0x0
    ];
    let max = 0x0;
    let r = E / 0x64;
    for (let i in W) {
        for (let j in S) {
            const t = i - 0x0 + (j - 0x0);
            const sw = j / i;
            if (sw > r || t > F)
                continue;
            if (sw > max) {
                max = sw;
                ans = [
                    t,
                    j
                ];
            }
        }
    }
    console['log'](ans[0x0], ans[0x1]);
})(input);
function a0_0x26b8e1(ret) {
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