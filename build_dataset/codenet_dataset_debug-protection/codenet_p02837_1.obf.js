'use strict';
console['log'](function (args) {
    const _0x19dce2 = (function () {
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
        _0x19dce2(this, function () {
            const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            const result = _0x1eb777('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x1eb777();
            }
        })();
    }());
    const _tmp = args['trim']()['split']('\x0a');
    const N = _tmp['shift']() | 0x0;
    const A = [], x = [], y = [];
    for (let i = 0x0; i < N; i++) {
        A[i] = _tmp['shift']() | 0x0;
        x[i] = [];
        y[i] = [];
        for (let j = 0x0; j < A[i]; j++) {
            const xy = _tmp[j]['split']('\x20');
            x[i][j] = xy[0x0] - 0x1;
            y[i][j] = xy[0x1] | 0x0;
        }
        _tmp['splice'](0x0, A[i]);
    }
    let K = 0x0;
    TEST:
        for (let honest = 0x1; honest < 0x1 << N; honest++) {
            let k = 0x0;
            for (let i = 0x0; i < N; i++) {
                if (!(honest & 0x1 << i))
                    continue;
                k++;
                for (let j = 0x0; j < A[i]; j++) {
                    const Xij = x[i][j], Yij = y[i][j];
                    const target = honest & 0x1 << Xij;
                    if (target !== Yij << Xij)
                        continue TEST;
                }
            }
            if (k > K)
                K = k;
        }
    return K;
}(require('fs')['readFileSync']('/dev/stdin', 'utf8')));
function _0x1eb777(ret) {
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