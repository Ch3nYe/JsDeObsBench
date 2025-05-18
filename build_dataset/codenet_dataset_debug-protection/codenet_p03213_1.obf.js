'use strict';
function Main(input) {
    const _0x215ab6 = (function () {
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
        _0x215ab6(this, function () {
            const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            const result = _0x4fdd55('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x4fdd55();
            }
        })();
    }());
    const N = input['split']('\x0a')[0x0] - 0x0;
    let e = new Array(N + 0x1)['fill'](0x0);
    for (let i = 0x2; i <= N; i++) {
        let cur = i;
        for (let j = 0x2; j <= i; j++) {
            while (cur % j == 0x0) {
                e[j] += 0x1;
                cur /= j;
            }
        }
    }
    const num = m => e['reduce']((ac, x) => ac + (x >= m - 0x1 ? 0x1 : 0x0), 0x0);
    let l75 = num(0x4b);
    let l25 = num(0x19);
    let l15 = num(0xf);
    let l5 = num(0x5);
    let l3 = num(0x3);
    let r5x5x3 = l5 * (l5 - 0x1) * (l3 - 0x2) / 0x2;
    let r15x5 = l15 * (l5 - 0x1);
    let r25x3 = l25 * (l3 - 0x1);
    let r75 = l75;
    console['log'](r75 + r25x3 + r15x5 + r5x5x3);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x4fdd55(ret) {
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