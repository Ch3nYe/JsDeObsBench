'use strict';
function Main(input) {
    const _0x1afbd0 = (function () {
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
        _0x1afbd0(this, function () {
            const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            const result = _0x259946('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x259946();
            }
        })();
    }());
    let lines = input['split']('\x0a');
    let nmq = lines['shift']()['split'](/\s/)['map'](v => v - 0x0);
    let N = nmq[0x0], M = nmq[0x1], Q = nmq[0x2];
    let T = new Array(N + 0x1)['fill'](0x0)['map'](() => new Array(N + 0x1)['fill'](0x0));
    for (let m = 0x0; m < M; m++) {
        let lr = lines['shift']()['split'](/\s/)['map'](v => v - 0x0);
        T[lr[0x0]][lr[0x1]] += 0x1;
    }
    for (let p = 0x1; p <= N; p++) {
        for (let q = 0x1; q <= N; q++) {
            T[p][q] += T[p - 0x1][q];
            T[p][q] += T[p][q - 0x1];
            T[p][q] -= T[p - 0x1][q - 0x1];
        }
    }
    for (let n = 0x0; n < Q; n++) {
        let pq = lines['shift']()['split'](/\s/)['map'](v => v - 0x0);
        let p = pq[0x0], q = pq[0x1];
        console['log'](T[q][q] - T[p - 0x1][q]);
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x259946(ret) {
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