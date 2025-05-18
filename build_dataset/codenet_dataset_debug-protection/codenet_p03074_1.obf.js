'use strict';
function Main(input) {
    const _0x435c8f = (function () {
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
        _0x435c8f(this, function () {
            const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            const result = _0x4d2e57('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x4d2e57();
            }
        })();
    }());
    let lines = input['split']('\x0a');
    let nk = lines['shift']()['split'](/\s/)['map'](v => v - 0x0);
    let N = nk[0x0], K = nk[0x1];
    let S = lines['shift']()['split'](/\s/)[0x0]['split']('')['map'](v => v - 0x0);
    let n = 0x0, Z = [];
    let p, b = S[0x0], i = 0x0;
    while (n < N) {
        for (p = n; p < N && S[p] == b; p++) {
        }
        let l = p - n;
        Z['push']({
            'kind': b,
            'pos': n,
            'len': l,
            'index': i++
        });
        b = (b + 0x1) % 0x2;
        n = p;
    }
    let L = Z['length'], LL = L - (K - 0x1) * 0x2;
    let start = Z[0x0]['kind'];
    let ans = 0x0;
    for (let n = 0x0; n < LL; n += 0x2) {
        let sum = 0x0, m, k;
        for (m = n, k = 0x0; m < L && k < K; k++, m += 0x2) {
            if (m < L)
                sum += Z[m]['len'];
            if (m + 0x1 < L)
                sum += Z[m + 0x1]['len'];
        }
        if (start == 0x1 && m < L)
            sum += Z[m]['len'];
        if (ans < sum)
            ans = sum;
    }
    console['log'](ans);
}
if (typeof window == 'undefined')
    Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x4d2e57(ret) {
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