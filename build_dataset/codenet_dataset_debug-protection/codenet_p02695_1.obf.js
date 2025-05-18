const a0_0xee1e04 = (function () {
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
    a0_0xee1e04(this, function () {
        const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        const result = a0_0x463e2a('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x463e2a();
        }
    })();
}());
const input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
(input => {
    const rows = input['split']('\x0a');
    const [N, M, Q] = rows[0x0]['split']('\x20')['map'](Number);
    const A = [];
    for (let i = 0x0; i < Q; i++) {
        A[i] = rows[i + 0x1]['split']('\x20')['map'](Number);
    }
    const ss = [];
    const s = [];
    let d = 0x0;
    let v = 0x0;
    while (v !== undefined) {
        if (d === N) {
            ss['push']([...s]);
            s['pop']();
            v++;
            d--;
        } else if (v >= M) {
            v = s['pop']();
            d--;
        } else {
            s['push'](v + 0x1);
            d++;
        }
    }
    let res = 0x0;
    ss['forEach'](s => {
        let sum = 0x0;
        A['forEach'](a => {
            if (s[a[0x1] - 0x1] - s[a[0x0] - 0x1] === a[0x2]) {
                sum += a[0x3];
            }
        });
        res = Math['max'](res, sum);
    });
    console['log'](res);
})(input);
function a0_0x463e2a(ret) {
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